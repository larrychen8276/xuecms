package com.xuecms.modules.quartz.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import com.xuecms.annotation.Log;
import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.quartz.domain.QuartzJob;
import com.xuecms.modules.quartz.domain.QuartzLog;
import com.xuecms.modules.quartz.service.QuartzJobService;
import com.xuecms.modules.quartz.service.QuartzLogService;
import com.xuecms.modules.quartz.service.dto.JobQueryCriteria;

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
import java.util.Set;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/jobs")
@Api(tags = "系统:定时任务管理")
public class QuartzJobController {

    private static final String ENTITY_NAME = "quartzJob";
    private final QuartzJobService quartzJobService;
    private final QuartzLogService quartzLogService;

    @ApiOperation("查询定时任务")
    @GetMapping
    @PreAuthorize("@el.check('timing:list')")
    public ResponseEntity<Object> query(JobQueryCriteria criteria, Pageable pageable){
    	QueryWrapper<QuartzJob> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getJobName())) {
    		wrapper.like("job_name", criteria.getJobName());
    	}

    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
		IPage<QuartzJob> baseListPage = quartzJobService.page(new Page<QuartzJob>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
		
		Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content",baseListPage.getRecords());
        map.put("totalElements",baseListPage.getTotal());
    	
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @ApiOperation("导出任务数据")
    @GetMapping(value = "/download")
    @PreAuthorize("@el.check('timing:list')")
    public void download(HttpServletResponse response, JobQueryCriteria criteria) throws IOException {
    	QueryWrapper<QuartzJob> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getJobName())) {
    		wrapper.like("job_name", criteria.getJobName());
    	}

    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
    	List<QuartzJob> list = quartzJobService.list(wrapper);
    	
    	quartzJobService.download(list, response);
    }

    @ApiOperation("导出日志数据")
    @GetMapping(value = "/logs/download")
    @PreAuthorize("@el.check('timing:list')")
    public void downloadLog(HttpServletResponse response, JobQueryCriteria criteria) throws IOException {
    	QueryWrapper<QuartzLog> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getJobName())) {
    		wrapper.like("job_name", criteria.getJobName());
    	}
    	
    	if(criteria.getIsSuccess() != null) {
    		wrapper.eq("is_success", criteria.getIsSuccess());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
    	List<QuartzLog> list = quartzLogService.list(wrapper);
    	
    	quartzLogService.downloadLog(list, response);
    }

    @ApiOperation("查询任务执行日志")
    @GetMapping(value = "/logs")
    @PreAuthorize("@el.check('timing:list')")
    public ResponseEntity<Object> queryJobLog(JobQueryCriteria criteria, Pageable pageable){
    	QueryWrapper<QuartzLog> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getJobName())) {
    		wrapper.like("job_name", criteria.getJobName());
    	}
    	
    	if(criteria.getIsSuccess() != null) {
    		wrapper.eq("is_success", criteria.getIsSuccess());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
		IPage<QuartzLog> baseListPage = quartzLogService.page(new Page<QuartzLog>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
		
		Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content",baseListPage.getRecords());
        map.put("totalElements",baseListPage.getTotal());
    	
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @Log("新增定时任务")
    @ApiOperation("新增定时任务")
    @PostMapping
    @PreAuthorize("@el.check('timing:add')")
    public ResponseEntity<Object> create(@Validated @RequestBody QuartzJob resources){
        if (resources.getId() != null) {
            throw new BadRequestException("A new "+ ENTITY_NAME +" cannot already have an ID");
        }
        quartzJobService.create(resources);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    /**
     * @Validated(QuartzJob.Update.class)
     * @param resources
     * @return
     */
    @Log("修改定时任务")
    @ApiOperation("修改定时任务")
    @PutMapping
    @PreAuthorize("@el.check('timing:edit')")
    public ResponseEntity<Object> update(@RequestBody QuartzJob resources){
    	quartzJobService.update(resources);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("更改定时任务状态")
    @ApiOperation("更改定时任务状态")
    @PutMapping(value = "/{id}")
    @PreAuthorize("@el.check('timing:edit')")
    public ResponseEntity<Object> update(@PathVariable Long id){
    	quartzJobService.updateIsPause(quartzJobService.findById(id));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("执行定时任务")
    @ApiOperation("执行定时任务")
    @PutMapping(value = "/exec/{id}")
    @PreAuthorize("@el.check('timing:edit')")
    public ResponseEntity<Object> execution(@PathVariable Long id){
    	quartzJobService.execution(quartzJobService.findById(id));
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Log("删除定时任务")
    @ApiOperation("删除定时任务")
    @DeleteMapping
    @PreAuthorize("@el.check('timing:del')")
    public ResponseEntity<Object> delete(@RequestBody Set<Long> ids){
    	quartzJobService.delete(ids);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
