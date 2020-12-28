package com.xuecms.modules.quartz.service;

import com.xuecms.modules.quartz.domain.QuartzJob;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import com.baomidou.mybatisplus.extension.service.IService;

public interface QuartzJobService extends IService<QuartzJob> {

    /**
     * 创建
     * @param resources /
     */
    void create(QuartzJob resources);

    /**
     * 编辑
     * @param resources /
     */
    void update(QuartzJob resources);
    

    /**
     * 根据ID查询
     * @param id ID
     * @return /
     */
    QuartzJob findById(Long id);

    /**
     * 更改定时任务状态
     * @param quartzJob /
     */
    void updateIsPause(QuartzJob quartzJob);

    /**
     * 立即执行定时任务
     * @param quartzJob /
     */
    void execution(QuartzJob quartzJob);
    

    /**
     * 删除任务
     * @param ids /
     */
    void delete(Set<Long> ids);
    
    /**
     * 执行子任务
     * @param tasks /
     * @throws InterruptedException /
     */
    void executionSubJob(String[] tasks) throws InterruptedException;
    
    /**
     * 导出定时任务
     * @param queryAll 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void download(List<QuartzJob> queryAll, HttpServletResponse response) throws IOException;
	
}