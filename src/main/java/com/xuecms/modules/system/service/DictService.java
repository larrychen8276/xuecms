package com.xuecms.modules.system.service;

import com.xuecms.modules.system.domain.Dict;
import com.xuecms.modules.system.service.dto.DictQueryCriteria;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.data.domain.Pageable;

import com.baomidou.mybatisplus.extension.service.IService;

public interface DictService extends IService<Dict> {

    /**
     * 编辑
     * @param resources /
     */
    void update(Dict resources);
    
    /**
     * 分页查询
     * @param criteria 条件
     * @param pageable 分页参数
     * @return /
     */
    Map<String,Object> queryAll(DictQueryCriteria criteria, Pageable pageable);
    
    /**
     * 导出数据
     * @param queryAll 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void download(List<Dict> queryAll, HttpServletResponse response) throws IOException;
	
}