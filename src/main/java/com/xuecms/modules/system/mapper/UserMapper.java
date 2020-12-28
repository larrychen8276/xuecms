package com.xuecms.modules.system.mapper;

import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.service.dto.UserQueryCriteria;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @Description 角色DAO
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Mapper
public interface UserMapper extends BaseMapper<User> {

	List<User> findByRoleId(Long roleId);
	

    /**
     * 修改密码
     * @param username 用户名
     * @param pass 密码
     * @param lastPasswordResetTime /
     */
    void updatePass(@Param("username") String username, @Param("pass") String pass, @Param("lastPasswordResetTime") Date lastPasswordResetTime);
	
    /**
     * 修改邮箱
     * @param username 用户名
     * @param email 邮箱
     */
    void updateEmail(@Param("username") String username, @Param("email") String email);
    
    /**
     * 根据菜单查询
     * @param id 菜单ID
     * @return /
     */
    List<User> findByMenuId(Long id);
	
	int countByRoles(List<Long> ids);
	
	//参数加上@Param(Constants.WRAPPER),xml里加上${ew.customSqlSegment}可以实现复杂条件检索查询
    IPage<User> findByPage(Page<User> page, @Param("criteria") UserQueryCriteria criteria);
    
    List<User> findByPage(@Param("criteria") UserQueryCriteria criteria);
}
