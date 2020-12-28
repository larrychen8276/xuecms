package com.xuecms.modules.quartz.mapper;

import com.xuecms.modules.quartz.domain.QuartzJob;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

/**
 * @Description 角色DAO
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Mapper
public interface QuartzJobMapper extends BaseMapper<QuartzJob> {


    /**
     * 查询启用的任务
     * @return List
     */
    List<QuartzJob> findByIsPauseIsFalse();
	
}
