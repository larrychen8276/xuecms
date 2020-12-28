package com.xuecms.modules.quartz.service.impl;

import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.quartz.domain.QuartzJob;
import com.xuecms.modules.quartz.mapper.QuartzJobMapper;
import com.xuecms.modules.quartz.service.QuartzJobService;
import com.xuecms.modules.quartz.utils.QuartzManage;
import com.xuecms.utils.FileUtil;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.StringUtils;
import com.xuecms.utils.ValidationUtil;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.quartz.CronExpression;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import cn.hutool.core.util.IdUtil;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuartzJobServiceImpl extends ServiceImpl<QuartzJobMapper, QuartzJob> implements QuartzJobService {
	
	private final QuartzManage quartzManage;
    private final RedisUtils redisUtils;
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void create(QuartzJob resources) {
        if (!CronExpression.isValidExpression(resources.getCronExpression())){
            throw new BadRequestException("cron表达式格式错误");
        }
        baseMapper.insert(resources);
        quartzManage.addJob(resources);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(QuartzJob resources) {
        if (!CronExpression.isValidExpression(resources.getCronExpression())){
            throw new BadRequestException("cron表达式格式错误");
        }
        if(StringUtils.isNotBlank(resources.getSubTask())){
            List<String> tasks = Arrays.asList(resources.getSubTask().split("[,，]"));
            if (tasks.contains(resources.getId().toString())) {
                throw new BadRequestException("子任务中不能添加当前任务ID");
            }
        }
        baseMapper.updateById(resources);
        quartzManage.updateJobCron(resources);
    }
    

    @Override
    public QuartzJob findById(Long id) {
    	QuartzJob quartzJob = baseMapper.selectById(id);
        ValidationUtil.isNull(quartzJob.getId(),"QuartzJob","id",id);
        return quartzJob;
    }
    

    @Override
    public void updateIsPause(QuartzJob quartzJob) {
        if (quartzJob.getIsPause()) {
            quartzManage.resumeJob(quartzJob);
            quartzJob.setIsPause(false);
        } else {
        	quartzManage.pauseJob(quartzJob);
            quartzJob.setIsPause(true);
        }
        baseMapper.updateById(quartzJob);
    }

    @Override
    public void execution(QuartzJob quartzJob) {
    	quartzManage.runJobNow(quartzJob);
    }
    

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(Set<Long> ids) {
        for (Long id : ids) {
        	QuartzJob quartzJob = baseMapper.selectById(id);
            quartzManage.deleteJob(quartzJob);
            baseMapper.deleteById(quartzJob);
        }
    }

    @Async
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void executionSubJob(String[] tasks) throws InterruptedException {
        for (String id : tasks) {
        	QuartzJob quartzJob = baseMapper.selectById(Long.parseLong(id));
            // 执行任务
            String uuid = IdUtil.simpleUUID();
            quartzJob.setUuid(uuid);
            // 执行任务
            execution(quartzJob);
            // 获取执行状态，如果执行失败则停止后面的子任务执行
            Boolean result = (Boolean) redisUtils.get(uuid);
            while (result == null) {
                // 休眠5秒，再次获取子任务执行情况
                Thread.sleep(5000);
                result = (Boolean) redisUtils.get(uuid);
            }
            if(!result){
                redisUtils.del(uuid);
                break;
            }
        }
    }
    
    @Override
    public void download(List<QuartzJob> quartzJobs, HttpServletResponse response) throws IOException {
        List<Map<String, Object>> list = new ArrayList<>();
        for (QuartzJob quartzJob : quartzJobs) {
            Map<String,Object> map = new LinkedHashMap<>();
            map.put("任务名称", quartzJob.getJobName());
            map.put("Bean名称", quartzJob.getBeanName());
            map.put("执行方法", quartzJob.getMethodName());
            map.put("参数", quartzJob.getParams());
            map.put("表达式", quartzJob.getCronExpression());
            map.put("状态", quartzJob.getIsPause() ? "暂停中" : "运行中");
            map.put("描述", quartzJob.getDescription());
            map.put("创建日期", quartzJob.getCreateTime());
            list.add(map);
        }
        FileUtil.downloadExcel(list, response);
    }
	
}