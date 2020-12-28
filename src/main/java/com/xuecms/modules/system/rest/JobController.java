package com.xuecms.modules.system.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import com.xuecms.annotation.Log;
import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.system.domain.Job;
import com.xuecms.modules.system.service.JobService;
import com.xuecms.modules.system.service.dto.JobQueryCriteria;

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
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Api(tags = "系统：岗位管理")
@RequestMapping("/api/job")
public class JobController {

    private final JobService jobService;
    
    private static final String ENTITY_NAME = "job";

    @ApiOperation("导出岗位数据")
    @GetMapping(value = "/download")
    @PreAuthorize("@el.check('job:list')")
    public void download(HttpServletResponse response, JobQueryCriteria criteria) throws IOException {
    	QueryWrapper<Job> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getName())) {
    		wrapper.like("name", criteria.getName());
    	}
    	if(criteria.getEnabled() != null) {
    		wrapper.eq("enabled", criteria.getEnabled());
    	}
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
    	List<Job> list = jobService.list(wrapper);
    	jobService.download(list, response);
    }

    @ApiOperation("查询岗位")
    @GetMapping
    @PreAuthorize("@el.check('job:list','user:list')")
    public ResponseEntity<Object> query(JobQueryCriteria criteria, Pageable pageable){
    	QueryWrapper<Job> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getName())) {
    		wrapper.like("name", criteria.getName());
    	}
    	if(criteria.getEnabled() != null) {
    		wrapper.eq("enabled", criteria.getEnabled());
    	}
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
		IPage<Job> baseListPage = jobService.page(new Page<Job>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
		
		Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content",baseListPage.getRecords());
        map.put("totalElements",baseListPage.getTotal());
    	
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @Log("新增岗位")
    @ApiOperation("新增岗位")
    @PostMapping
    @PreAuthorize("@el.check('job:add')")
    public ResponseEntity<Object> create(@Validated @RequestBody Job entity){
        if (entity.getId() != null) {
            throw new BadRequestException("A new "+ ENTITY_NAME +" cannot already have an ID");
        }
        jobService.save(entity);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /**
     * @Validated(Job.Update.class) 
     * @param resources
     * @return
     */
    @Log("修改岗位")
    @ApiOperation("修改岗位")
    @PutMapping
    @PreAuthorize("@el.check('job:edit')")
    public ResponseEntity<Object> update(@RequestBody Job entity){
        jobService.updateById(entity);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("删除岗位")
    @ApiOperation("删除岗位")
    @DeleteMapping
    @PreAuthorize("@el.check('job:del')")
    public ResponseEntity<Object> delete(@RequestBody List<Long> ids){
        // 验证是否被用户关联
//    	TODO : 需要添加上
        
    	jobService.verification(ids);
        jobService.removeByIds(ids);
        
        return new ResponseEntity<>(HttpStatus.OK);
    }
}