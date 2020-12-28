package com.xuecms.modules.system.service.impl;

import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.system.domain.Job;
import com.xuecms.modules.system.mapper.JobMapper;
import com.xuecms.modules.system.service.JobService;
import com.xuecms.utils.FileUtil;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobServiceImpl extends ServiceImpl<JobMapper, Job> implements JobService {


    @Override
    public void verification(List<Long> ids) {
        if(baseMapper.countByJobs(ids) > 0){
            throw new BadRequestException("所选的岗位中存在用户关联，请解除关联再试！");
        }
    }
	
	@Override
	public List<Job> findByUserId(Long userId) {
		return baseMapper.findByUserId(userId);
	}
	
    @Override
    public void download(List<Job> jobDtos, HttpServletResponse response) throws IOException {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Job jobDTO : jobDtos) {
            Map<String,Object> map = new LinkedHashMap<>();
            map.put("岗位名称", jobDTO.getName());
            map.put("岗位状态", jobDTO.getEnabled() ? "启用" : "停用");
//            map.put("创建日期", jobDTO.getCreateTime());
            list.add(map);
        }
        FileUtil.downloadExcel(list, response);
    }
	
}