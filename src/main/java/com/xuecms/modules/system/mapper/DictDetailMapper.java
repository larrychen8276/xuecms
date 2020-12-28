package com.xuecms.modules.system.mapper;

import com.xuecms.modules.system.domain.DictDetail;
import com.xuecms.modules.system.service.dto.DictDetailQueryCriteria;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @Description 角色DAO
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Mapper
public interface DictDetailMapper extends BaseMapper<DictDetail> {
	

    List<DictDetail> findByDictId(Long dictId);
    

    /**
     * 根据字典名称查询
     * @param name /
     * @return /
     */
    List<DictDetail> findByDictName(String name);
    

    IPage<DictDetail> findByPage(Page<DictDetail> page, @Param("criteria") DictDetailQueryCriteria criteria);
	
}
