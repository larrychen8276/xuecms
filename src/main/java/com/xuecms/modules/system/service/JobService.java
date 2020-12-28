package com.xuecms.modules.system.service;

import com.xuecms.modules.system.domain.Job;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.baomidou.mybatisplus.extension.service.IService;

public interface JobService extends IService<Job> {

    /**
     * 验证是否被用户关联
     * @param ids /
     */
    void verification(List<Long> ids);
    
	List<Job> findByUserId(Long userId);
	
    /**
     * 导出数据
     * @param queryAll 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void download(List<Job> queryAll, HttpServletResponse response) throws IOException;
	
}