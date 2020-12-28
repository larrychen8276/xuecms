package com.xuecms.modules.tool.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import com.xuecms.annotation.Log;
import com.xuecms.modules.tool.service.LogService;
import com.xuecms.modules.tool.service.dto.LogQueryCriteria;
import com.xuecms.utils.SecurityUtils;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
@RequestMapping("/api/logs")
@Api(tags = "系统：日志管理")
public class LogController {

    private final LogService logService;

    @Log("导出数据")
    @ApiOperation("导出数据")
    @GetMapping(value = "/download")
    @PreAuthorize("@el.check()")
    public void download(HttpServletResponse response, LogQueryCriteria criteria) throws IOException {
        criteria.setLogType("INFO");
        
        QueryWrapper<com.xuecms.modules.tool.domain.Log> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getBlurry())) {
    		wrapper.like("username", criteria.getUsername());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
        
        List<com.xuecms.modules.tool.domain.Log> list = logService.list(wrapper);
        
        logService.download(list, response);
    }

    @Log("导出错误数据")
    @ApiOperation("导出错误数据")
    @GetMapping(value = "/error/download")
    @PreAuthorize("@el.check()")
    public void downloadErrorLog(HttpServletResponse response, LogQueryCriteria criteria) throws IOException {
        criteria.setLogType("ERROR");
        
        QueryWrapper<com.xuecms.modules.tool.domain.Log> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getBlurry())) {
    		wrapper.like("username", criteria.getUsername());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
        List<com.xuecms.modules.tool.domain.Log> list = logService.list(wrapper);
        
        logService.download(list, response);
    }
    @GetMapping
    @ApiOperation("日志查询")
    @PreAuthorize("@el.check()")
    public ResponseEntity<Object> query(LogQueryCriteria criteria, Pageable pageable){
        criteria.setLogType("INFO");
        
        QueryWrapper<com.xuecms.modules.tool.domain.Log> wrapper = new QueryWrapper<>();
        wrapper.eq("log_type", criteria.getLogType());
    	if(StringUtils.isNotBlank(criteria.getBlurry())) {
    		wrapper.like("username", criteria.getBlurry());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
        IPage<com.xuecms.modules.tool.domain.Log> baseListPage = logService.page(new Page<com.xuecms.modules.tool.domain.Log>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
        
        Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content",baseListPage.getRecords());
        map.put("totalElements",baseListPage.getTotal());
        
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping(value = "/user")
    @ApiOperation("用户日志查询")
    public ResponseEntity<Object> queryUserLog(LogQueryCriteria criteria, Pageable pageable){
        criteria.setLogType("INFO");
        
        QueryWrapper<com.xuecms.modules.tool.domain.Log> wrapper = new QueryWrapper<>();
        wrapper.eq("log_type", criteria.getLogType());
        wrapper.like("username", SecurityUtils.getCurrentUsername());
        
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
        
    	IPage<com.xuecms.modules.tool.domain.Log> baseListPage = logService.page(new Page<com.xuecms.modules.tool.domain.Log>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
        
        Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content",baseListPage.getRecords());
        map.put("totalElements",baseListPage.getTotal());
    	
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping(value = "/error")
    @ApiOperation("错误日志查询")
    @PreAuthorize("@el.check()")
    public ResponseEntity<Object> queryErrorLog(LogQueryCriteria criteria, Pageable pageable){
        criteria.setLogType("ERROR");
        
        QueryWrapper<com.xuecms.modules.tool.domain.Log> wrapper = new QueryWrapper<>();
        wrapper.eq("log_type", criteria.getLogType());
        if(StringUtils.isNotBlank(criteria.getBlurry())) {
    		wrapper.like("username", criteria.getBlurry());
    	}
        
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	IPage<com.xuecms.modules.tool.domain.Log> baseListPage = logService.page(new Page<com.xuecms.modules.tool.domain.Log>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
        
        Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content",baseListPage.getRecords());
        map.put("totalElements",baseListPage.getTotal());
        
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @GetMapping(value = "/error/{id}")
    @ApiOperation("日志异常详情查询")
    @PreAuthorize("@el.check()")
    public ResponseEntity<Object> queryErrorLogs(@PathVariable Long id){
    	Object obj = logService.findByErrDetail(id);
    	
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    @DeleteMapping(value = "/del/error")
    @Log("删除所有ERROR日志")
    @ApiOperation("删除所有ERROR日志")
    @PreAuthorize("@el.check()")
    public ResponseEntity<Object> delAllErrorLog(){
    	QueryWrapper<com.xuecms.modules.tool.domain.Log> wrapper = new QueryWrapper<>();
        wrapper.eq("log_type", "ERROR");
    	logService.remove(wrapper);
    	
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/del/info")
    @Log("删除所有INFO日志")
    @ApiOperation("删除所有INFO日志")
    @PreAuthorize("@el.check()")
    public ResponseEntity<Object> delAllInfoLog(){
        
        QueryWrapper<com.xuecms.modules.tool.domain.Log> wrapper = new QueryWrapper<>();
        wrapper.eq("log_type", "INFO");
    	logService.remove(wrapper);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
