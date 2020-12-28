package com.xuecms.modules.system.service.impl;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.NotBlank;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.web.multipart.MultipartFile;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import lombok.RequiredArgsConstructor;
import com.xuecms.modules.system.mapper.DeptMapper;
import com.xuecms.modules.system.mapper.JobMapper;
import com.xuecms.modules.system.mapper.RoleMapper;
import com.xuecms.modules.system.mapper.UserMapper;
import com.xuecms.modules.system.service.UserService;
import com.xuecms.modules.system.service.dto.UserQueryCriteria;
import com.xuecms.utils.CacheKey;
import com.xuecms.utils.FileUtil;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.SecurityUtils;
import com.xuecms.utils.ValidationUtil;
import com.xuecms.config.FileProperties;
import com.xuecms.exception.EntityExistException;
import com.xuecms.exception.EntityNotFoundException;
import com.xuecms.modules.security.service.OnlineUserService;
import com.xuecms.modules.security.service.UserCacheClean;
import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.domain.Job;
import com.xuecms.modules.system.domain.Role;
import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.domain.vo.UserJobVo;
import com.xuecms.modules.system.domain.vo.UserRoleVo;

/**
 * @Description 角色业务实现
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

	private final DeptMapper deptMapper;
	private final JobMapper jobMapper;
	private final RoleMapper roleMapper;
	private final RedisUtils redisUtils;
	private final FileProperties properties;
	private final UserCacheClean userCacheClean;
	private final OnlineUserService onlineUserService;
	
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void create(User resources) {
    	QueryWrapper<User> usernameWrapper = new QueryWrapper<>();
        usernameWrapper.eq("username", resources.getUsername());
        if (baseMapper.selectOne(usernameWrapper) != null) {
            throw new EntityExistException(User.class, "username", resources.getUsername());
        }
        
        QueryWrapper<User> emailWrapper = new QueryWrapper<>();
        emailWrapper.eq("email", resources.getEmail());
        if (baseMapper.selectOne(emailWrapper) != null) {
            throw new EntityExistException(User.class, "email", resources.getEmail());
        }
        
        QueryWrapper<User> phoneWrapper = new QueryWrapper<>();
        phoneWrapper.eq("phone", resources.getPhone());
        if (baseMapper.selectOne(phoneWrapper) != null) {
            throw new EntityExistException(User.class, "phone", resources.getPhone());
        }
        
        resources.setDeptId(resources.getDept().getId());
        baseMapper.insert(resources);
        
        // 保存（sys_users_jobs）
        List<UserJobVo> userJobList = new ArrayList<>();
        List<Job> jobList = resources.getJobs();
        jobList.forEach(job -> {
        	UserJobVo userJob = new UserJobVo(resources.getId(), job.getId());
        	userJobList.add(userJob);
        });
        jobMapper.insertBatch(userJobList);
        
        // 保存（sys_users_roles）
        List<UserRoleVo> userRoleList = new ArrayList<>();
        List<Role> roleList = resources.getRoles();
        roleList.forEach(role -> {
        	UserRoleVo userRole = new UserRoleVo(resources.getId(), role.getId());
        	userRoleList.add(userRole);
        });
        roleMapper.insertBatch(userRoleList);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(User resources) {
    	User user = baseMapper.selectById(resources.getId());//.orElseGet(User::new);
    	
        ValidationUtil.isNull(user.getId(), "User", "id", resources.getId());
        QueryWrapper<User> usernameWrapper = new QueryWrapper<>();
        usernameWrapper.eq("username", resources.getUsername());
        
        QueryWrapper<User> emailWrapper = new QueryWrapper<>();
        emailWrapper.eq("email", resources.getEmail());
        
        QueryWrapper<User> phoneWrapper = new QueryWrapper<>();
        phoneWrapper.eq("phone", resources.getPhone());
        
        User user1 = baseMapper.selectOne(usernameWrapper);
        User user2 = baseMapper.selectOne(emailWrapper);
        User user3 = baseMapper.selectOne(phoneWrapper);
        
        if (user1 != null && !user.getId().equals(user1.getId())) {
            throw new EntityExistException(User.class, "username", resources.getUsername());
        }
        if (user2 != null && !user.getId().equals(user2.getId())) {
            throw new EntityExistException(User.class, "email", resources.getEmail());
        }
        if (user3 != null && !user.getId().equals(user3.getId())) {
            throw new EntityExistException(User.class, "phone", resources.getPhone());
        }
        // 如果用户的角色改变
        if (!resources.getRoles().equals(user.getRoles())) {
            redisUtils.del(CacheKey.DATE_USER + resources.getId());
            redisUtils.del(CacheKey.MENU_USER + resources.getId());
            redisUtils.del(CacheKey.ROLE_AUTH + resources.getId());
        }
        // 如果用户名称修改
        if(!resources.getUsername().equals(user.getUsername())){
            redisUtils.del("user::username:" + user.getUsername());
        }
        // 如果用户被禁用，则清除用户登录信息
        if(!resources.getEnabled()){
            onlineUserService.kickOutForUsername(resources.getUsername());
        }
        
        // 删除（sys_users_jobs）
        jobMapper.untiedJob(List.of(user.getId()));
        // 删除（sys_users_roles）
        roleMapper.untiedRole(List.of(user.getId()));
        
        // 保存（sys_users_jobs）
        List<UserJobVo> userJobList = new ArrayList<>();
        List<Job> jobList = resources.getJobs();
        jobList.forEach(job -> {
        	UserJobVo userJob = new UserJobVo(user.getId(), job.getId());
        	userJobList.add(userJob);
        });
        jobMapper.insertBatch(userJobList);
        
        // 保存（sys_users_roles）
        List<UserRoleVo> userRoleList = new ArrayList<>();
        List<Role> roleList = resources.getRoles();
        roleList.forEach(role -> {
        	UserRoleVo userRole = new UserRoleVo(user.getId(), role.getId());
        	userRoleList.add(userRole);
        });
        roleMapper.insertBatch(userRoleList);
        
        user.setUsername(resources.getUsername());
        user.setEmail(resources.getEmail());
        user.setEnabled(resources.getEnabled());
        user.setRoles(resources.getRoles());
        user.setDept(resources.getDept());
        user.setJobs(resources.getJobs());
        user.setPhone(resources.getPhone());
        user.setNickName(resources.getNickName());
        user.setGender(resources.getGender());
        baseMapper.updateById(user);
        // 清除缓存
        delCaches(user.getId(), user.getUsername());
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(List<Long> ids) {
        for (Long id : ids) {
            // 清理缓存
        	User user = baseMapper.selectById(id);
            delCaches(user.getId(), user.getUsername());
        }
        baseMapper.deleteBatchIds(ids);
        // 删除（sys_users_jobs）
        jobMapper.untiedJob(ids);
        // 删除（sys_users_roles）
        roleMapper.untiedRole(ids);
    }
    
    @Override
//    @Cacheable(key = "'username:' + #p0")
    public User findByName(String userName) {
    	QueryWrapper<User> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(userName)) {
    		wrapper.eq("userName", userName);
    	}
    	
    	User user = baseMapper.selectOne(wrapper);
        if (user == null) {
            throw new EntityNotFoundException(User.class, "name", userName);
        } else {
        	return user;
        }
    }
    

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updatePass(String username, String pass) {
    	baseMapper.updatePass(username, pass, new Date());
        redisUtils.del("user::username:" + username);
        flushCache(username);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Map<String, String> updateAvatar(MultipartFile multipartFile) {
    	QueryWrapper<User> usernameWrapper = new QueryWrapper<>();
        usernameWrapper.eq("username", SecurityUtils.getCurrentUsername());
        
        User user = baseMapper.selectOne(usernameWrapper);
        
        String oldPath = user.getAvatarPath();
        File file = FileUtil.upload(multipartFile, properties.getPath().getAvatar());
        user.setAvatarPath(Objects.requireNonNull(file).getPath());
        user.setAvatarName(file.getName());
        baseMapper.updateById(user);
        if (StringUtils.isNotBlank(oldPath)) {
            FileUtil.del(oldPath);
        }
        @NotBlank String username = user.getUsername();
        redisUtils.del(CacheKey.USER_NAME + username);
        flushCache(username);
        return new HashMap<String, String>(1) {{
            put("avatar", file.getName());
        }};
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateEmail(String username, String email) {
    	baseMapper.updateEmail(username, email);
        redisUtils.del(CacheKey.USER_NAME + username);
        flushCache(username);
    }
	
	@Override
	public List<User> findByRoleId(Long roleId) {
		return baseMapper.findByRoleId(roleId);
	}

	@Override
	public int countByRoles(List<Long> ids) {
		return baseMapper.countByRoles(ids);
	}
    
    @Override
    public Object queryAll(UserQueryCriteria criteria, Pageable pageable) {
    	
    	if(!CollectionUtils.isEmpty(criteria.getCreateTime())) {
    		criteria.setStartTime(criteria.getCreateTime().get(0));
    		criteria.setEndTime(criteria.getCreateTime().get(1));
    	}
    	
    	IPage<User> page = baseMapper.findByPage(new Page<User>(pageable.getPageNumber() + 1, pageable.getPageSize()), criteria);
    	Map<String,Object> map = new LinkedHashMap<>(2);
    	
    	List<User> list = page.getRecords();
    	list.forEach(user -> {
    		Dept dept = deptMapper.selectById(user.getDeptId());
    		user.setDept(dept);
    		
    		List<Job> job = jobMapper.findByUserId(user.getId());
    		user.setJobs(job);
    		List<Role> role = roleMapper.findByUserId(user.getId());
    		user.setRoles(role);
    	});

		map.put("content", list);
		map.put("totalElements", page.getTotal());
        return map;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateCenter(User resources) {
    	User user = baseMapper.selectById(resources.getId());//.orElseGet(User::new);
    	
    	QueryWrapper<User> phoneWrapper = new QueryWrapper<>();
        phoneWrapper.eq("phone", resources.getPhone());
        User user1 = baseMapper.selectOne(phoneWrapper);
        if (user1 != null && !user.getId().equals(user1.getId())) {
            throw new EntityExistException(User.class, "phone", resources.getPhone());
        }
        user.setNickName(resources.getNickName());
        user.setPhone(resources.getPhone());
        user.setGender(resources.getGender());
        baseMapper.updateById(user);
        // 清理缓存
        delCaches(user.getId(), user.getUsername());
    }

    @Override
    public List<User> queryAll(UserQueryCriteria criteria) {
    	
    	if(!CollectionUtils.isEmpty(criteria.getCreateTime())) {
    		criteria.setStartTime(criteria.getCreateTime().get(0));
    		criteria.setEndTime(criteria.getCreateTime().get(1));
    	}
    	
    	List<User> list = baseMapper.findByPage(criteria);
    	list.forEach(user -> {
    		Dept dept = deptMapper.selectById(user.getDeptId());
    		user.setDept(dept);
    		
    		List<Job> job = jobMapper.findByUserId(user.getId());
    		user.setJobs(job);
    		List<Role> role = roleMapper.findByUserId(user.getId());
    		user.setRoles(role);
    	});

        return list;
    }

    @Override
    public void download(List<User> queryAll, HttpServletResponse response) throws IOException {
        List<Map<String, Object>> list = new ArrayList<>();
        for (User userDTO : queryAll) {
            List<String> roles = userDTO.getRoles().stream().map(Role::getName).collect(Collectors.toList());
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("用户名", userDTO.getUsername());
            map.put("角色", roles);
            map.put("部门", userDTO.getDept().getName());
            map.put("岗位", userDTO.getJobs().stream().map(Job::getName).collect(Collectors.toList()));
            map.put("邮箱", userDTO.getEmail());
            map.put("状态", userDTO.getEnabled() ? "启用" : "禁用");
            map.put("手机号码", userDTO.getPhone());
            map.put("修改密码的时间", userDTO.getPwdResetTime());
            map.put("创建日期", userDTO.getCreateTime());
            list.add(map);
        }
        FileUtil.downloadExcel(list, response);
    }
    

    /**
     * 清理缓存
     *
     * @param id /
     */
    public void delCaches(Long id, String username) {
        redisUtils.del(CacheKey.USER_ID + id);
        redisUtils.del(CacheKey.USER_NAME + username);
        flushCache(username);
    }

    /**
     * 清理 登陆时 用户缓存信息
     *
     * @param username /
     */
    private void flushCache(String username) {
        userCacheClean.cleanUserCache(username);
    }
}