package com.xuecms.modules.system.rest;

import cn.hutool.core.lang.Dict;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import com.xuecms.annotation.Log;
import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.domain.Menu;
import com.xuecms.modules.system.domain.Role;
import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.system.service.DeptService;
import com.xuecms.modules.system.service.MenuService;
import com.xuecms.modules.system.service.RoleService;
import com.xuecms.modules.system.service.dto.RoleQueryCriteria;
import com.xuecms.utils.SecurityUtils;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Api(tags = "系统：角色管理")
@RequestMapping("/api/roles")
public class RoleController {

    private final RoleService roleService;
    private final MenuService menuService;
    private final DeptService deptService;

    private static final String ENTITY_NAME = "role";

    @ApiOperation("获取单个role")
    @GetMapping(value = "/{id}")
    @PreAuthorize("@el.check('roles:list')")
    public ResponseEntity<Object> query(@PathVariable Long id){
    	Role entity = roleService.getById(id);
    	
        return new ResponseEntity<>(entity, HttpStatus.OK);
    }

    @ApiOperation("导出角色数据")
    @GetMapping(value = "/download")
    @PreAuthorize("@el.check('role:list')")
    public void download(HttpServletResponse response, RoleQueryCriteria criteria) throws IOException {
    	
    	QueryWrapper<Role> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getBlurry())) {
    		wrapper.like("name", criteria.getBlurry());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
    	List<Role> list = roleService.list(wrapper);
    	roleService.download(list, response);
    }

    @ApiOperation("返回全部的角色")
    @GetMapping(value = "/all")
    @PreAuthorize("@el.check('roles:list','user:add','user:edit')")
    public ResponseEntity<Object> query(){
    	List<Role> list = roleService.list();
    	
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @ApiOperation("查询角色")
    @GetMapping
    @PreAuthorize("@el.check('roles:list')")
    public ResponseEntity<Object> query(RoleQueryCriteria criteria, Pageable pageable){
    	
    	QueryWrapper<Role> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getBlurry())) {
    		wrapper.like("name", criteria.getBlurry());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
        IPage<Role> baseListPage = roleService.page(new Page<Role>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
        
        List<Role> list = baseListPage.getRecords();
        list.forEach(role -> {
        	List<Menu> menuList = menuService.findByRoleId(role.getId());
        	role.setMenus(menuList);
        	List<Dept> deptList = deptService.findByRoleId(role.getId());
        	role.setDepts(deptList);
        });
        
        Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content", list);
        map.put("totalElements",baseListPage.getTotal());
    	
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation("获取用户级别")
    @GetMapping(value = "/level")
    public ResponseEntity<Object> getLevel(){
    	Object obj = Dict.create().set("level", getLevels(null));
    	
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @Log("新增角色")
    @ApiOperation("新增角色")
    @PostMapping
    @PreAuthorize("@el.check('roles:add')")
    public ResponseEntity<Object> create(@Validated @RequestBody Role resources){
    	
        if (resources.getId() != null) {
            throw new BadRequestException("A new "+ ENTITY_NAME +" cannot already have an ID");
        }
        getLevels(resources.getLevel());
        
        roleService.create(resources);
        
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @Log("修改角色")
    @ApiOperation("修改角色")
    @PutMapping
    @PreAuthorize("@el.check('roles:edit')")
    public ResponseEntity<Object> update(@RequestBody Role resources){
        getLevels(resources.getLevel());
        
        roleService.update(resources);
        
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("修改角色菜单")
    @ApiOperation("修改角色菜单")
    @PutMapping(value = "/menu")
    @PreAuthorize("@el.check('roles:edit')")
    public ResponseEntity<Object> updateMenu(@RequestBody Role resources){
        
        Role role = roleService.getById(resources.getId());
        getLevels(role.getLevel());
        
        roleService.updateMenu(resources, role);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("删除角色")
    @ApiOperation("删除角色")
    @DeleteMapping
    @PreAuthorize("@el.check('roles:del')")
    public ResponseEntity<Object> delete(@RequestBody List<Long> ids){
        for (Long id : ids) {
        	Role role = roleService.getById(id);
            getLevels(role.getLevel());
        }
        // 验证是否被用户关联
        roleService.verification(ids);
        roleService.delete(ids);
        
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 获取用户的角色级别
     * @return /
     */
    private int getLevels(Integer level){
    	List<Integer> levels = roleService.findByUsersId(SecurityUtils.getCurrentUserId()).stream().map(Role::getLevel).collect(Collectors.toList());
        
    	int min = Collections.min(levels);
        if(level != null){
            if(level < min){
                throw new BadRequestException("权限不足，你的角色级别：" + min + "，低于操作的角色级别：" + level);
            }
        }
        return min;
    }
}
