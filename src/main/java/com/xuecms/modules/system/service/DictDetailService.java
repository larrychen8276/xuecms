package com.xuecms.modules.system.service;

import com.xuecms.modules.system.domain.DictDetail;
import com.xuecms.modules.system.service.dto.DictDetailQueryCriteria;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Pageable;

import com.baomidou.mybatisplus.extension.service.IService;

public interface DictDetailService extends IService<DictDetail> {
	

    /**
     * 创建
     * @param resources /
     */
    void create(DictDetail resources);

    /**
     * 编辑
     * @param resources /
     */
    void update(DictDetail resources);

    /**
     * 分页查询
     * @param criteria 条件
     * @param pageable 分页参数
     * @return /
     */
    Map<String,Object> queryAll(DictDetailQueryCriteria criteria, Pageable pageable);
    
    /**
     * 根据字典名称获取字典详情
     * @param name 字典名称
     * @return /
     */
    List<DictDetail> getDictByName(String name);
}