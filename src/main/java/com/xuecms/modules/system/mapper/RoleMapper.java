package com.xuecms.modules.system.mapper;

import com.xuecms.modules.system.domain.Role;
import com.xuecms.modules.system.domain.vo.UserRoleVo;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

/**
 * @Description 角色DAO
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Mapper
public interface RoleMapper extends BaseMapper<Role> {
	

	void insertBatch(List<UserRoleVo> list);
	
	List<Role> findByUserId(Long userId);
	
    /**
     * 根据菜单Id查询
     * @param menuIds /
     * @return /
     */
    List<Role> findInMenuId(List<Long> menuIds);
    
    /**
     * 解绑角色菜单
     * @param id 菜单ID
     */
    void untiedMenu(Long id);
    
    /**
     * 解绑用户角色（sys_users_roles）
     * @param id 菜单ID
     */
    void untiedRole(List<Long> ids);
	
}
