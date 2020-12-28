package com.xuecms.modules.system.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import cn.hutool.core.collection.CollectionUtil;
import lombok.RequiredArgsConstructor;
import com.xuecms.modules.system.mapper.DeptMapper;
import com.xuecms.modules.system.mapper.MenuMapper;
import com.xuecms.modules.system.mapper.RoleMapper;
import com.xuecms.modules.system.mapper.UserMapper;
import com.xuecms.modules.system.service.RoleService;
import com.xuecms.utils.CacheKey;
import com.xuecms.utils.FileUtil;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.StringUtils;
import com.xuecms.utils.ValidationUtil;
import com.xuecms.exception.BadRequestException;
import com.xuecms.exception.EntityExistException;
import com.xuecms.modules.security.service.UserCacheClean;
import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.domain.Menu;
import com.xuecms.modules.system.domain.Role;
import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.domain.vo.RoleDeptVo;
import com.xuecms.modules.system.domain.vo.RoleMenuVo;

/**
 * @Description 角色业务实现
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Service
@RequiredArgsConstructor
@CacheConfig(cacheNames = "role")
public class RoleServiceImpl extends ServiceImpl<RoleMapper, Role> implements RoleService {

	private final MenuMapper menuMapper;
	private final DeptMapper deptMapper;
	private final UserMapper userMapper;
	private final RoleMapper roleMapper;
	private final UserCacheClean userCacheClean;
	private final RedisUtils redisUtils;

	@Override
	public List<Role> findByUserId(Long userId) {
		return baseMapper.findByUserId(userId);
	}

    @Override
    @Cacheable(key = "'auth:' + #p0.id")
    public List<GrantedAuthority> mapToGrantedAuthorities(User user) {
        Set<String> permissions = new HashSet<>();
        // 如果是管理员直接返回
        if (user.getIsAdmin()) {
            permissions.add("admin");
            return permissions.stream().map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
        }
        List<Role> roles = roleMapper.findByUserId(user.getId());
        permissions = roles.stream().flatMap(role -> role.getMenus().stream())
                .filter(menu -> StringUtils.isNotBlank(menu.getPermission()))
                .map(Menu::getPermission).collect(Collectors.toSet());
        return permissions.stream().map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }
	
    @Override
    public void download(List<Role> roles, HttpServletResponse response) throws IOException {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Role role : roles) {
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("角色名称", role.getName());
            map.put("角色级别", role.getLevel());
            map.put("描述", role.getDescription());
//            map.put("创建日期", role.getCreateTime());
            list.add(map);
        }
        FileUtil.downloadExcel(list, response);
    }

    @Override
    public List<Role> findByUsersId(Long userId) {
    	List<Role> roles = baseMapper.findByUserId(userId);
    	return roles;
    }
    
    @Override
    public Integer findByRoles(List<Role> roles) {
        if (roles.size() == 0) {
            return Integer.MAX_VALUE;
        }
        Set<Role> roleDtos = new HashSet<>();
        roles.forEach(role -> {
        	roleDtos.add(baseMapper.selectById(role.getId()));
        });
        return Collections.min(roleDtos.stream().map(Role::getLevel).collect(Collectors.toList()));
    }
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void create(Role resources) {
    	QueryWrapper<Role> wrapper = new QueryWrapper<>();
        wrapper.like("name", resources.getName());
        Role entity = baseMapper.selectOne(wrapper);
    	
        if (entity != null) {
            throw new EntityExistException(Role.class, "username", resources.getName());
        }
        baseMapper.insert(resources);
        
        List<Dept> list = resources.getDepts();
        
        List<RoleDeptVo> roleDeptList = new ArrayList<>();
        list.forEach(dept -> {
        	RoleDeptVo rd = new RoleDeptVo(resources.getId(), dept.getId());
        	roleDeptList.add(rd);
        });
        
        deptMapper.insertBatch(roleDeptList);
    }

    @Override
    public void updateMenu(Role resources, Role roleDTO) {
        List<User> users = userMapper.findByRoleId(roleDTO.getId());
        // 更新菜单
        menuMapper.untiedMenuByRoleId(roleDTO.getId());
        
        List<RoleMenuVo> roleMenuList = new ArrayList<>();
        List<Menu> menuList = resources.getMenus();
        menuList.forEach(menu -> {
        	RoleMenuVo roleMenu = new RoleMenuVo(roleDTO.getId(), menu.getId());
        	roleMenuList.add(roleMenu);
        });
        
        menuMapper.insertBatch(roleMenuList);
        
        delCaches(resources.getId(), users);
        baseMapper.updateById(roleDTO);
    }
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(Role resources) {
    	Role role = baseMapper.selectById(resources.getId());
        ValidationUtil.isNull(role.getId(), "Role", "id", resources.getId());

        QueryWrapper<Role> wrapper = new QueryWrapper<>();
        wrapper.like("name", resources.getName());
        Role role1 = baseMapper.selectOne(wrapper);

        if (role1 != null && !role1.getId().equals(role.getId())) {
            throw new EntityExistException(Role.class, "username", resources.getName());
        }
        // 删除（sys_roles_depts）
        deptMapper.untiedDeptByRoleId(resources.getId());
        // 保存（sys_roles_depts）
        List<Dept> list = resources.getDepts();
        List<RoleDeptVo> roleDeptList = new ArrayList<>();
        list.forEach(dept -> {
        	RoleDeptVo rd = new RoleDeptVo(resources.getId(), dept.getId());
        	roleDeptList.add(rd);
        });
        deptMapper.insertBatch(roleDeptList);
        
        role.setName(resources.getName());
        role.setDescription(resources.getDescription());
        role.setDataScope(resources.getDataScope());
        role.setDepts(resources.getDepts());
        role.setLevel(resources.getLevel());
        baseMapper.updateById(role);
        // 更新相关缓存
        delCaches(role.getId(), null);
    }
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void untiedMenu(Long menuId) {
        // 更新菜单
    	roleMapper.untiedMenu(menuId);
    }
    
    @Override
    public void verification(List<Long> ids) {
        if (userMapper.countByRoles(ids) > 0) {
            throw new BadRequestException("所选角色存在用户关联，请解除关联再试！");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(List<Long> ids) {
        for (Long id : ids) {
            // 更新相关缓存
            delCaches(id, null);
            
            // 删除角色部门关联（sys_roles_depts）
            deptMapper.untiedDeptByRoleId(id);
            // 删除角色菜单关联（sys_roles_menus）
            menuMapper.untiedMenuByRoleId(id);
        }
        
        baseMapper.deleteBatchIds(ids);
    }
    
    @Override
    public List<Role> findInMenuId(List<Long> menuIds) {
        return roleMapper.findInMenuId(menuIds);
    }

    /**
     * 清理缓存
     * @param id /
     */
    public void delCaches(Long id, List<User> users) {
        users = CollectionUtil.isEmpty(users) ? userMapper.findByRoleId(id) : users;
        if (CollectionUtil.isNotEmpty(users)) {
            users.forEach(item -> userCacheClean.cleanUserCache(item.getUsername()));
            Set<Long> userIds = users.stream().map(User::getId).collect(Collectors.toSet());
            redisUtils.delByKeys(CacheKey.DATE_USER, userIds);
            redisUtils.delByKeys(CacheKey.MENU_USER, userIds);
            redisUtils.delByKeys(CacheKey.ROLE_AUTH, userIds);
        }
        redisUtils.del(CacheKey.ROLE_ID + id);
    }
    
}