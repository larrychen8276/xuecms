package com.xuecms.modules.quartz.utils;

import cn.hutool.extra.template.Template;
import cn.hutool.extra.template.TemplateConfig;
import cn.hutool.extra.template.TemplateEngine;
import cn.hutool.extra.template.TemplateUtil;
import com.xuecms.config.thread.ThreadPoolExecutorUtil;
import com.xuecms.modules.tool.domain.vo.EmailVo;
import com.xuecms.modules.tool.service.EmailService;
import com.xuecms.modules.quartz.domain.QuartzJob;
import com.xuecms.modules.quartz.domain.QuartzLog;
import com.xuecms.modules.quartz.service.QuartzJobService;
import com.xuecms.modules.quartz.service.QuartzLogService;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.SpringContextHolder;
import com.xuecms.utils.StringUtils;
import com.xuecms.utils.ThrowableUtil;
import org.quartz.JobExecutionContext;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.quartz.QuartzJobBean;
import java.util.*;
import java.util.concurrent.*;

/**
 * 参考人人开源，https://gitee.com/renrenio/renren-security
 */
@Async
@SuppressWarnings({"unchecked","all"})
public class ExecutionJob extends QuartzJobBean {

    /** 该处仅供参考 */
    private final static ThreadPoolExecutor EXECUTOR = ThreadPoolExecutorUtil.getPoll();

    @Override
    public void executeInternal(JobExecutionContext context) {
    	QuartzJob quartzJob = (QuartzJob) context.getMergedJobDataMap().get(QuartzJob.JOB_KEY);
        // 获取spring bean
    	QuartzLogService quartzLogService = SpringContextHolder.getBean(QuartzLogService.class);
        QuartzJobService quartzJobService = SpringContextHolder.getBean(QuartzJobService.class);
        RedisUtils redisUtils = SpringContextHolder.getBean(RedisUtils.class);
        
        String uuid = quartzJob.getUuid();

        QuartzLog log = new QuartzLog();
        log.setJobName(quartzJob.getJobName());
        log.setBeanName(quartzJob.getBeanName());
        log.setMethodName(quartzJob.getMethodName());
        log.setParams(quartzJob.getParams());
        long startTime = System.currentTimeMillis();
        log.setCronExpression(quartzJob.getCronExpression());
        try {
            // 执行任务
            System.out.println("--------------------------------------------------------------");
            System.out.println("任务开始执行，任务名称：" + quartzJob.getJobName());
            QuartzRunnable task = new QuartzRunnable(quartzJob.getBeanName(), quartzJob.getMethodName(),
                    quartzJob.getParams());
            Future<?> future = EXECUTOR.submit(task);
            future.get();
            long times = System.currentTimeMillis() - startTime;
            log.setTime(times);
            if(StringUtils.isNotBlank(uuid)) {
                redisUtils.set(uuid, true);
            }
            // 任务状态
            log.setIsSuccess(true);
            System.out.println("任务执行完毕，任务名称：" + quartzJob.getJobName() + ", 执行时间：" + times + "毫秒");
            System.out.println("--------------------------------------------------------------");
            // 判断是否存在子任务
            if(quartzJob.getSubTask() != null){
                String[] tasks = quartzJob.getSubTask().split("[,，]");
                // 执行子任务
                quartzJobService.executionSubJob(tasks);
            }
        } catch (Exception e) {
            if(StringUtils.isNotBlank(uuid)) {
                redisUtils.set(uuid, false);
            }
            System.out.println("任务执行失败，任务名称：" + quartzJob.getJobName());
            System.out.println("--------------------------------------------------------------");
            long times = System.currentTimeMillis() - startTime;
            log.setTime(times);
            // 任务状态 0：成功 1：失败
            log.setIsSuccess(false);
            log.setExceptionDetail(ThrowableUtil.getStackTrace(e));
            // 任务如果失败了则暂停
            if(quartzJob.getPauseAfterFailure() != null && quartzJob.getPauseAfterFailure()){
                quartzJob.setIsPause(false);
                //更新状态
                quartzJobService.updateIsPause(quartzJob);
            }
            if(quartzJob.getEmail() != null){
                EmailService emailService = SpringContextHolder.getBean(EmailService.class);
                // 邮箱报警
                EmailVo emailVo = taskAlarm(quartzJob, ThrowableUtil.getStackTrace(e));
                emailService.send(emailVo, emailService.getById(1L));
            }
        } finally {
        	quartzLogService.save(log);
        }
    }

    private EmailVo taskAlarm(QuartzJob quartzJob, String msg) {
        EmailVo emailVo = new EmailVo();
        emailVo.setSubject("定时任务【"+ quartzJob.getJobName() +"】执行失败，请尽快处理！");
        Map<String, Object> data = new HashMap<>(16);
        data.put("task", quartzJob);
        data.put("msg", msg);
        TemplateEngine engine = TemplateUtil.createEngine(new TemplateConfig("template", TemplateConfig.ResourceMode.CLASSPATH));
        Template template = engine.getTemplate("email/taskAlarm.ftl");
        emailVo.setContent(template.render(data));
        List<String> emails = Arrays.asList(quartzJob.getEmail().split("[,，]"));
        emailVo.setTos(emails);
        return emailVo;
    }
}