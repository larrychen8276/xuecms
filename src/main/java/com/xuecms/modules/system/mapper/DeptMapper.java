package com.xuecms.modules.system.mapper;

import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.domain.vo.RoleDeptVo;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @Description 角色DAO
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Mapper
public interface DeptMapper extends BaseMapper<Dept> {
	
	List<Dept> findByRoleId(Long roleId);
	
    /**
     * 根据 PID 查询
     * @param id pid
     * @return /
     */
    List<Dept> findByPid(Long id);
	
	void untiedDeptByRoleId(Long roleId);
	
	void insertBatch(List<RoleDeptVo> list);
	

    /**
     * 判断是否存在子节点
     * @param pid /
     * @return /
     */
    int countByPid(Long pid);
    

    /**
     * 根据部门查询
     * @param deptIds /
     * @return /
     */
    int countByDepts(List<Long> deptIds);
    
    /**
     * 根据角色中的部门查询
     * @param id /
     * @return /
     */
    List<User> findByDeptRoleId(Long id);

    /**
     * 根据ID更新sub_count
     * @param count /
     * @param id /
     */
    void updateSubCntById(@Param("count") Integer count, @Param("id") Long id);
	
}
