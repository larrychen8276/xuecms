package com.xuecms.modules.system.rest;

import cn.hutool.core.collection.CollectionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import com.xuecms.annotation.Log;
import com.xuecms.config.RsaProperties;
import com.xuecms.modules.system.service.DataService;
import com.xuecms.modules.system.service.DeptService;
import com.xuecms.modules.system.service.RoleService;
import com.xuecms.modules.system.service.UserService;
import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.domain.Role;
import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.domain.vo.UserPassVo;
import com.xuecms.modules.system.service.dto.UserQueryCriteria;
import com.xuecms.modules.system.service.VerifyService;
import com.xuecms.utils.*;
import com.xuecms.utils.enums.CodeEnum;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Api(tags = "系统：用户管理")
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    private final DataService dataService;
    
    private final DeptService deptService;
    
    private final RoleService roleService;
    private final VerifyService verificationCodeService;

    @ApiOperation("导出用户数据")
    @GetMapping(value = "/download")
    @PreAuthorize("@el.check('user:list')")
    public void download(HttpServletResponse response, UserQueryCriteria criteria) throws IOException {
    	List<User> list = userService.queryAll(criteria);
    	userService.download(list, response);
    }

    @ApiOperation("查询用户")
    @GetMapping
    @PreAuthorize("@el.check('user:list')")
    public ResponseEntity<Object> query(UserQueryCriteria criteria, Pageable pageable){
        if (!ObjectUtils.isEmpty(criteria.getDeptId())) {
            criteria.getDeptIds().add(criteria.getDeptId());
            
            List<Dept> deptList = deptService.findByPid(criteria.getDeptId());
            List<Long> childrenList = deptService.getDeptChildren(deptList);
            
            criteria.getDeptIds().addAll(childrenList);
        }
        // 数据权限
        User user = userService.findByName(SecurityUtils.getCurrentUsername());
        List<Long> dataScopes = dataService.getDeptIds(user);
        // criteria.getDeptIds() 不为空并且数据权限不为空则取交集
        if (!CollectionUtils.isEmpty(criteria.getDeptIds()) && !CollectionUtils.isEmpty(dataScopes)){
            // 取交集
            criteria.getDeptIds().retainAll(dataScopes);
            if(!CollectionUtil.isEmpty(criteria.getDeptIds())){
            	
            	Object obj = userService.queryAll(criteria,pageable);
            	
                return new ResponseEntity<>(obj, HttpStatus.OK);
            }
        } else {
            // 否则取并集
            criteria.getDeptIds().addAll(dataScopes);
        		
        	Object obj = userService.queryAll(criteria,pageable);
            
            return new ResponseEntity<>(obj, HttpStatus.OK);
        }
        return new ResponseEntity<>(PageUtil.toPage(null,0),HttpStatus.OK);
    }

    @Log("新增用户")
    @ApiOperation("新增用户")
    @PostMapping
    @PreAuthorize("@el.check('user:add')")
    public ResponseEntity<Object> create(@Validated @RequestBody User resources){
        checkLevel(resources);
        // 默认密码 123456
        resources.setPassword(passwordEncoder.encode("123456"));
        userService.create(resources);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /**
     * @Validated(User.Update.class) 
     * @param resources
     * @return
     */
    @Log("修改用户")
    @ApiOperation("修改用户")
    @PutMapping
    @PreAuthorize("@el.check('user:edit')")
    public ResponseEntity<Object> update(@RequestBody User resources){
        checkLevel(resources);
        userService.update(resources);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    /**
     * @Validated(User.Update.class) 
     * @param resources
     * @return
     */
    @Log("修改用户：个人中心")
    @ApiOperation("修改用户：个人中心")
    @PutMapping(value = "center")
    public ResponseEntity<Object> center(@RequestBody User resources){
        if(!resources.getId().equals(SecurityUtils.getCurrentUserId())){
            throw new BadRequestException("不能修改他人资料");
        }
        userService.updateCenter(resources);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("删除用户")
    @ApiOperation("删除用户")
    @DeleteMapping
    @PreAuthorize("@el.check('user:del')")
    public ResponseEntity<Object> delete(@RequestBody List<Long> ids){
        for (Long id : ids) {
        	Integer currentLevel =  Collections.min(roleService.findByUsersId(SecurityUtils.getCurrentUserId()).stream().map(Role::getLevel).collect(Collectors.toList()));
        	Integer optLevel =  Collections.min(roleService.findByUsersId(id).stream().map(Role::getLevel).collect(Collectors.toList()));
            if (currentLevel > optLevel) {
            	throw new BadRequestException("角色权限不足，不能删除：" + userService.getById(id).getUsername());
            }
        }
        userService.delete(ids);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ApiOperation("修改密码")
    @PostMapping(value = "/updatePass")
    public ResponseEntity<Object> updatePass(@RequestBody UserPassVo passVo) throws Exception {
        String oldPass = RsaUtils.decryptByPrivateKey(RsaProperties.privateKey,passVo.getOldPass());
        String newPass = RsaUtils.decryptByPrivateKey(RsaProperties.privateKey,passVo.getNewPass());
        
        QueryWrapper<User> usernameWrapper = new QueryWrapper<>();
        usernameWrapper.eq("username", SecurityUtils.getCurrentUsername());
        User user = userService.getOne(usernameWrapper);
        
        if(!passwordEncoder.matches(oldPass, user.getPassword())){
            throw new BadRequestException("修改失败，旧密码错误");
        }
        if(passwordEncoder.matches(newPass, user.getPassword())){
            throw new BadRequestException("新密码不能与旧密码相同");
        }
        userService.updatePass(user.getUsername(),passwordEncoder.encode(newPass));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ApiOperation("修改头像")
    @PostMapping(value = "/updateAvatar")
    public ResponseEntity<Object> updateAvatar(@RequestParam MultipartFile avatar){
    	Map<String, String> map = userService.updateAvatar(avatar);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @Log("修改邮箱")
    @ApiOperation("修改邮箱")
    @PostMapping(value = "/updateEmail/{code}")
    public ResponseEntity<Object> updateEmail(@PathVariable String code,@RequestBody User user) throws Exception {
        String password = RsaUtils.decryptByPrivateKey(RsaProperties.privateKey,user.getPassword());
        User userDto = userService.findByName(SecurityUtils.getCurrentUsername());
        
        if(!passwordEncoder.matches(password, userDto.getPassword())){
            throw new BadRequestException("密码错误");
        }
        verificationCodeService.validated(CodeEnum.EMAIL_RESET_EMAIL_CODE.getKey() + user.getEmail(), code);
        userService.updateEmail(userDto.getUsername(),user.getEmail());
        
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 如果当前用户的角色级别低于创建用户的角色级别，则抛出权限不足的错误
     * @param resources /
     */
    private void checkLevel(User resources) {
    	List<Integer> roleList = roleService.findByUsersId(SecurityUtils.getCurrentUserId()).stream().map(Role::getLevel).collect(Collectors.toList());
    	
        Integer currentLevel =  Collections.min(roleList);
        
        Integer optLevel = roleService.findByRoles(resources.getRoles());
        
        if (currentLevel > optLevel) {
            throw new BadRequestException("角色权限不足");
        }
    }
}
