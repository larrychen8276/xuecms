package com.xuecms.modules.system.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.GrantedAuthority;

import com.baomidou.mybatisplus.extension.service.IService;

import com.xuecms.modules.system.domain.Role;
import com.xuecms.modules.system.domain.User;

/**
 * @Description 角色业务接口
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
public interface RoleService extends IService<Role> {

	List<Role> findByUserId(Long userId);
	
    /**
     * 获取用户权限信息
     * @param user 用户信息
     * @return 权限信息
     */
    List<GrantedAuthority> mapToGrantedAuthorities(User user);
    
    /**
     * 导出数据
     * @param queryAll 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void download(List<Role> queryAll, HttpServletResponse response) throws IOException;

    /**
     * 根据用户ID查询
     * @param id 用户ID
     * @return /
     */
    List<Role> findByUsersId(Long userId);
    

    /**
     * 根据角色查询角色级别
     * @param roles /
     * @return /
     */
    Integer findByRoles(List<Role> roles);
    

    /**
     * 创建
     * @param resources /
     */
    void create(Role resources);
    
    /**
     * 修改绑定的菜单
     * @param resources /
     * @param roleDTO /
     */
    void updateMenu(Role resources, Role roleDTO);
    
    /**
     * 编辑
     * @param resources /
     */
    void update(Role resources);
    
    /**
     * 解绑菜单
     * @param id /
     */
    void untiedMenu(Long id);
    
    /**
     * 验证是否被用户关联
     * @param ids /
     */
    void verification(List<Long> ids);
    
    /**
     * 删除
     * @param ids /
     */
    void delete(List<Long> ids);
    
    /**
     * 根据菜单Id查询
     * @param menuIds /
     * @return /
     */
    List<Role> findInMenuId(List<Long> menuIds);
    
}

