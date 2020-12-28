package com.xuecms.modules.system.service.impl;

import com.xuecms.modules.system.domain.DictDetail;
import com.xuecms.modules.system.domain.Dict;
import com.xuecms.modules.system.mapper.DictDetailMapper;
import com.xuecms.modules.system.mapper.DictMapper;
import com.xuecms.modules.system.service.DictService;
import com.xuecms.modules.system.service.dto.DictDetailDto;
import com.xuecms.modules.system.service.dto.DictDto;
import com.xuecms.modules.system.service.dto.DictQueryCriteria;
import com.xuecms.utils.FileUtil;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.ValidationUtil;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import cn.hutool.core.collection.CollectionUtil;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DictServiceImpl extends ServiceImpl<DictMapper, Dict> implements DictService {
	
	private final RedisUtils redisUtils;
	private final DictDetailMapper dictDetailMapper;
	
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(Dict resources) {
        // 清理缓存
        delCaches(resources);
        Dict dict = baseMapper.selectById(resources.getId());//.orElseGet(Dict::new);
        ValidationUtil.isNull( dict.getId(),"Dict","id",resources.getId());
        resources.setId(dict.getId());
        baseMapper.updateById(resources);
    }
    
    @Override
    public Map<String, Object> queryAll(DictQueryCriteria dict, Pageable pageable){
        QueryWrapper<Dict> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(dict.getBlurry())) {
    		wrapper.like("name", dict.getBlurry());
    	}
    	
		IPage<Dict> baseListPage = baseMapper.selectPage(new Page<Dict>(pageable.getPageNumber() + 1, pageable.getPageSize()), wrapper);
		
        List<DictDto> dictDtoList = new ArrayList<>();
        
        List<Dict> dictList = baseListPage.getRecords();
        for(Dict entity : dictList) {
        	DictDto dictDto = new DictDto();

            dictDto.setId( entity.getId() );
            
            List<DictDetail> list = dictDetailMapper.findByDictId(entity.getId());
            
            List<DictDetailDto> list1 = new ArrayList<>( list.size() );
            for ( DictDetail dictDetail : list ) {
            	
            	DictDetailDto dictDetailDto = new DictDetailDto();

                dictDetailDto.setId( dictDetail.getId() );
                
                Dict dictEntity = new Dict();
                dictEntity.setId(dictDetail.getDictId());
                dictDetailDto.setDict( dictEntity );
                
                dictDetailDto.setLabel( dictDetail.getLabel() );
                dictDetailDto.setValue( dictDetail.getValue() );
                dictDetailDto.setDictSort( dictDetail.getDictSort() );
            	
                list1.add( dictDetailDto );
            }
            
            dictDto.setDictDetails( list1 );
            dictDto.setName( entity.getName() );
            dictDto.setDescription( entity.getDescription() );
            
            dictDtoList.add(dictDto);
        }
        

        Map<String,Object> map = new LinkedHashMap<>(2);
        map.put("content", dictDtoList);
        map.put("totalElements",baseListPage.getTotal());
        return map;
    }
    
    @Override
    public void download(List<Dict> dictDtos, HttpServletResponse response) throws IOException {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Dict dictDTO : dictDtos) {
            if(CollectionUtil.isNotEmpty(dictDTO.getDictDetails())){
                for (DictDetail dictDetail : dictDTO.getDictDetails()) {
                    Map<String,Object> map = new LinkedHashMap<>();
                    map.put("字典名称", dictDTO.getName());
                    map.put("字典描述", dictDTO.getDescription());
                    map.put("字典标签", dictDetail.getLabel());
                    map.put("字典值", dictDetail.getValue());
//                    map.put("创建日期", dictDetail.getCreateTime());
                    list.add(map);
                }
            } else {
                Map<String,Object> map = new LinkedHashMap<>();
                map.put("字典名称", dictDTO.getName());
                map.put("字典描述", dictDTO.getDescription());
                map.put("字典标签", null);
                map.put("字典值", null);
//                map.put("创建日期", dictDTO.getCreateTime());
                list.add(map);
            }
        }
        FileUtil.downloadExcel(list, response);
    }
	
    public void delCaches(Dict dict){
        redisUtils.del("dict::name:" + dict.getName());
    }
    
}