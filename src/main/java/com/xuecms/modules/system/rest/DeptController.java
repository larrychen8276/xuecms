package com.xuecms.modules.system.rest;

import cn.hutool.core.collection.CollectionUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import com.xuecms.annotation.Log;
import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.service.DeptService;
import com.xuecms.modules.system.service.dto.DeptQueryCriteria;
import com.xuecms.utils.PageUtil;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequiredArgsConstructor
@Api(tags = "系统：部门管理")
@RequestMapping("/api/dept")
public class DeptController {

    private final DeptService deptService;
    private static final String ENTITY_NAME = "dept";

    @ApiOperation("导出部门数据")
    @GetMapping(value = "/download")
    @PreAuthorize("@el.check('dept:list')")
    public void download(HttpServletResponse response, DeptQueryCriteria criteria) throws Exception {
		List<Dept> list = deptService.queryAll(criteria, false);
		deptService.download(list, response);
    }

    @ApiOperation("查询部门")
    @GetMapping
    @PreAuthorize("@el.check('user:list','dept:list')")
    public ResponseEntity<Object> query(DeptQueryCriteria criteria) throws Exception {
        List<Dept> deptDtos = deptService.queryAll(criteria, true);
        
        return new ResponseEntity<>(PageUtil.toPage(deptDtos, deptDtos.size()),HttpStatus.OK);
    }

    @ApiOperation("查询部门:根据ID获取同级与上级数据")
    @PostMapping("/superior")
    @PreAuthorize("@el.check('user:list','dept:list')")
    public ResponseEntity<Object> getSuperior(@RequestBody List<Long> ids) {
        Set<Dept> deptDtos  = new LinkedHashSet<>();
        for (Long id : ids) {
        	Dept deptDto = deptService.getById(id);
        	List<Dept> depts = deptService.getSuperior(deptDto, new ArrayList<>());
            deptDtos.addAll(depts);
        }
        Object obj = deptService.buildTree(new ArrayList<>(deptDtos));
        
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @Log("新增部门")
    @ApiOperation("新增部门")
    @PostMapping
    @PreAuthorize("@el.check('dept:add')")
    public ResponseEntity<Object> create(@Validated @RequestBody Dept resources){
        if (resources.getId() != null) {
            throw new BadRequestException("A new "+ ENTITY_NAME +" cannot already have an ID");
        }
        deptService.create(resources);
        
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /**
     * TODO : 
     * @Validated(Dept.Update.class) 
     * @param resources
     * @return
     */
    @Log("修改部门")
    @ApiOperation("修改部门")
    @PutMapping
    @PreAuthorize("@el.check('dept:edit')")
    public ResponseEntity<Object> update(@RequestBody Dept resources){
        deptService.update(resources);
        
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("删除部门")
    @ApiOperation("删除部门")
    @DeleteMapping
    @PreAuthorize("@el.check('dept:del')")
    public ResponseEntity<Object> delete(@RequestBody Set<Long> ids){
        Set<Dept> deptDtos = new HashSet<>();
        for (Long id : ids) {
        	
            List<Dept> deptList = deptService.findByPid(id);
            Dept entity = deptService.findById(id);
            
            deptDtos.add(entity);
            if(CollectionUtil.isNotEmpty(deptList)){
            	deptDtos = deptService.getDeleteDepts(deptList, deptDtos);
            }
        }
        // 验证是否被角色或用户关联
        deptService.verification(deptDtos);
        deptService.delete(deptDtos);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}