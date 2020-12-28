package com.xuecms.modules.system.service.impl;

import com.xuecms.modules.system.domain.DictDetail;
import com.xuecms.modules.system.domain.Dict;
import com.xuecms.modules.system.mapper.DictDetailMapper;
import com.xuecms.modules.system.mapper.DictMapper;
import com.xuecms.modules.system.service.DictDetailService;
import com.xuecms.modules.system.service.dto.DictDetailDto;
import com.xuecms.modules.system.service.dto.DictDetailQueryCriteria;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.ValidationUtil;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DictDetailServiceImpl extends ServiceImpl<DictDetailMapper, DictDetail> implements DictDetailService {
	
	private final DictMapper dictMapper;
	private final RedisUtils redisUtils;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void create(DictDetail resources) {
    	resources.setDictId(resources.getDict().getId());
        baseMapper.insert(resources);
        // 清理缓存
        delCaches(resources);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(DictDetail resources) {
    	DictDetail dictDetail = baseMapper.selectById(resources.getId());//.orElseGet(DictDetail::new);
        ValidationUtil.isNull( dictDetail.getId(),"DictDetail","id",resources.getId());
        resources.setId(dictDetail.getId());
        baseMapper.updateById(resources);
        // 清理缓存
        delCaches(resources);
    }
    

    @Override
    public Map<String,Object> queryAll(DictDetailQueryCriteria criteria, Pageable pageable) {
        
        QueryWrapper<DictDetail> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getLabel())) {
    		wrapper.like("label", criteria.getLabel());
    	}
    	if(StringUtils.isNotBlank(criteria.getDictName())) {
    		wrapper.eq("name", criteria.getDictName());
    	}
    	
    	IPage<DictDetail> baseListPage = baseMapper.findByPage(new Page<DictDetail>(pageable.getPageNumber() + 1, pageable.getPageSize()), criteria);
        
        List<DictDetailDto> dictDetailDtoList = new ArrayList<>();
        List<DictDetail> dictDetailList = baseListPage.getRecords();
        for(DictDetail entity : dictDetailList) {
        	DictDetailDto dictDetailDto = new DictDetailDto();

            dictDetailDto.setId( entity.getId() );
            
            Dict dict = new Dict();
            dict.setId(entity.getDictId());
            dictDetailDto.setDict( dict );
            
            dictDetailDto.setLabel( entity.getLabel() );
            dictDetailDto.setValue( entity.getValue() );
            dictDetailDto.setDictSort( entity.getDictSort() );
            
            dictDetailDtoList.add(dictDetailDto);
        }

        Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content",dictDetailDtoList);
        map.put("totalElements",baseListPage.getTotal());
        return map;
    }
	
    @Override
//    @Cacheable(key = "'name:' + #p0")
    public List<DictDetail> getDictByName(String name) {
    	return baseMapper.findByDictName(name);
    }
    
    public void delCaches(DictDetail dictDetail){
    	Dict dict = dictMapper.selectById(dictDetail.getDict().getId());//.orElseGet(Dict::new);
        redisUtils.del("dict::name:" + dict.getName());
    }
    
}