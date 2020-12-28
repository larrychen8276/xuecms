package com.xuecms.modules.quartz.service;

import com.xuecms.modules.quartz.domain.QuartzLog;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.baomidou.mybatisplus.extension.service.IService;

public interface QuartzLogService extends IService<QuartzLog> {
	

    /**
     * 导出定时任务日志
     * @param queryAllLog 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void downloadLog(List<QuartzLog> queryAllLog, HttpServletResponse response) throws IOException;
	
}