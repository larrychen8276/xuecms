package com.xuecms.modules.system.mapper;

import com.xuecms.modules.system.domain.Job;
import com.xuecms.modules.system.domain.vo.UserJobVo;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

/**
 * @Description 角色DAO
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Mapper
public interface JobMapper extends BaseMapper<Job> {
	
	void insertBatch(List<UserJobVo> list);
	

    /**
     * 根据岗位查询
     * @param ids /
     * @return /
     */
    int countByJobs(List<Long> ids);
	
    /**
     * 解绑用户岗位
     * @param id 菜单ID
     */
    void untiedJob(List<Long> ids);
	
	List<Job> findByUserId(Long userId);
	
}
