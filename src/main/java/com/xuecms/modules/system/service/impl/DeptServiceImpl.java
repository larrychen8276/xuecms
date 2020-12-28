package com.xuecms.modules.system.service.impl;

import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.domain.vo.RoleDeptVo;
import com.xuecms.modules.system.mapper.DeptMapper;
import com.xuecms.modules.system.service.DeptService;
import com.xuecms.modules.system.service.dto.DeptQueryCriteria;
import com.xuecms.utils.FileUtil;
import com.xuecms.utils.QueryHelp;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.SecurityUtils;
import com.xuecms.utils.StringUtils;
import com.xuecms.utils.ValidationUtil;
import com.xuecms.utils.enums.DataScopeEnum;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.util.ObjectUtil;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeptServiceImpl extends ServiceImpl<DeptMapper, Dept> implements DeptService {
	
	private final RedisUtils redisUtils;
	
	@Override
	public void insertBatch(List<RoleDeptVo> list) {
		baseMapper.insertBatch(list);
	}

	@Override
	public void untiedDeptByRoleId(Long roleId) {
		baseMapper.untiedDeptByRoleId(roleId);
	}
	
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void create(Dept resources) {
    	baseMapper.insert(resources);
        // 计算子节点数目
        resources.setSubCount(0);
        // 清理缓存
        updateSubCnt(resources.getPid());
    }
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(Dept resources) {
        // 旧的部门
        Long oldPid = findById(resources.getId()).getPid();
        Long newPid = resources.getPid();
        if(resources.getPid() != null && resources.getId().equals(resources.getPid())) {
            throw new BadRequestException("上级不能为自己");
        }
        Dept dept = baseMapper.selectById(resources.getId());
        ValidationUtil.isNull( dept.getId(),"Dept","id",resources.getId());
        resources.setId(dept.getId());
        baseMapper.updateById(resources);
        // 更新父节点中子节点数目
        updateSubCnt(oldPid);
        updateSubCnt(newPid);
        // 清理缓存
        delCaches(resources.getId());
    }

    @Override
    public List<Dept> queryAll(DeptQueryCriteria criteria, Boolean isQuery) throws Exception {
//        Sort sort = new Sort(Sort.Direction.ASC, "deptSort");
        String dataScopeType = SecurityUtils.getDataScopeType();
        if (isQuery) {
            if(dataScopeType.equals(DataScopeEnum.ALL.getValue())){
                criteria.setPidIsNull(true);
            }
            List<Field> fields = QueryHelp.getAllFields(criteria.getClass(), new ArrayList<>());
            List<String> fieldNames = new ArrayList<String>(){{ add("pidIsNull");add("enabled");}};
            for (Field field : fields) {
                //设置对象的访问权限，保证对private的属性的访问
                field.setAccessible(true);
                Object val = field.get(criteria);
                if(fieldNames.contains(field.getName())){
                    continue;
                }
                if (ObjectUtil.isNotNull(val)) {
                    criteria.setPidIsNull(null);
                    break;
                }
            }
        }

        System.out.println(criteria);
        
        QueryWrapper<Dept> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getName())) {
    		wrapper.like("name", criteria.getName());
    	}
    	if(criteria.getEnabled() != null) {
    		wrapper.eq("enabled", criteria.getEnabled());
    	}
    	
    	if(null != criteria.getPidIsNull() && criteria.getPidIsNull()) {
    		wrapper.isNull("pid");
    	}
    	if(criteria.getPid() != null) {
    		wrapper.eq("pid", criteria.getPid());
    	}
    	
    	if(criteria.getCreateTime() != null && criteria.getCreateTime().size() > 0) {
    		wrapper.between("create_time", criteria.getCreateTime().get(0), criteria.getCreateTime().get(1));
    	}
    	
//        List<DeptEntity> list = deptRepository.findAll((root, criteriaQuery, criteriaBuilder) -> QueryHelp.getPredicate(root,criteria,criteriaBuilder));
    	List<Dept> list = baseMapper.selectList(wrapper);
    	
        // 如果为空，就代表为自定义权限或者本级权限，就需要去重，不理解可以注释掉，看查询结果
        if(StringUtils.isBlank(dataScopeType)){
            return deduplication(list);
        }
        return list;
    }
    
    @Override
//    @Cacheable(key = "'id:' + #p0")
    public Dept findById(Long id) {
    	Dept dept = baseMapper.selectById(id);
        ValidationUtil.isNull(dept.getId(),"Dept","id",id);
        return dept;
    }
    

    @Override
    public List<Dept> findByPid(long pid) {
        return baseMapper.findByPid(pid);
    }
    

    @Override
    public Set<Dept> getDeleteDepts(List<Dept> menuList, Set<Dept> deptDtos) {
        for (Dept dept : menuList) {
        	deptDtos.add(dept);
            List<Dept> depts = baseMapper.findByPid(dept.getId());
            if(depts!=null && depts.size()!=0){
                getDeleteDepts(depts, deptDtos);
            }
        }
        return deptDtos;
    }
    
    @Override
    public void download(List<Dept> deptDtos, HttpServletResponse response) throws IOException {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Dept deptDTO : deptDtos) {
            Map<String,Object> map = new LinkedHashMap<>();
            map.put("部门名称", deptDTO.getName());
            map.put("部门状态", deptDTO.getEnabled() ? "启用" : "停用");
            map.put("创建日期", deptDTO.getCreateTime());
            list.add(map);
        }
        FileUtil.downloadExcel(list, response);
    }
	
	@Override
    public List<Dept> getSuperior(Dept deptDto, List<Dept> depts) {
        if(deptDto.getPid() == null){
        	QueryWrapper<Dept> queryWrapper = new QueryWrapper<>();
        	queryWrapper.isNull("pid");
        	depts.addAll(baseMapper.selectList(queryWrapper));
//            depts.addAll(deptRepository.findByPidIsNull());
            return depts;
        }
//        depts.addAll(deptRepository.findByPid(deptDto.getPid()));
        QueryWrapper<Dept> deptWrapper = new QueryWrapper<>();
        deptWrapper.eq("id", deptDto.getPid());
        depts.addAll(baseMapper.selectList(deptWrapper));
//        return getSuperior(findById(deptDto.getPid()), depts);
        return getSuperior(baseMapper.selectById(deptDto.getPid()), depts);
    }
	
	@Override
    public Object buildTree(List<Dept> deptDtos) {
        Set<Dept> trees = new LinkedHashSet<>();
        Set<Dept> depts= new LinkedHashSet<>();
        List<String> deptNames = deptDtos.stream().map(Dept::getName).collect(Collectors.toList());
        boolean isChild;
        for (Dept dept : deptDtos) {
            isChild = false;
            if (dept.getPid() == null) {
                trees.add(dept);
            }
            for (Dept it : deptDtos) {
                if (it.getPid() != null && dept.getId().equals(it.getPid())) {
                    isChild = true;
                    if (dept.getChildren() == null) {
                        dept.setChildren(new ArrayList<>());
                    }
                    dept.getChildren().add(it);
                }
            }
            if(isChild) {
                depts.add(dept);
            } else if(dept.getPid() != null &&  !deptNames.contains(baseMapper.selectById(dept.getPid()).getName())) {
                depts.add(dept);
            }
        }

        if (CollectionUtil.isEmpty(trees)) {
            trees = depts;
        }
        Map<String,Object> map = new HashMap<>(2);
        map.put("totalElements",deptDtos.size());
        map.put("content",CollectionUtil.isEmpty(trees)? deptDtos :trees);
        return map;
    }

    @Override
    public List<Long> getDeptChildren(List<Dept> deptList) {
        List<Long> list = new ArrayList<>();
        deptList.forEach(dept -> {
                    if (dept!=null && dept.getEnabled()) {
                        List<Dept> depts = baseMapper.findByPid(dept.getId());
                        if (deptList.size() != 0) {
                            list.addAll(getDeptChildren(depts));
                        }
                        list.add(dept.getId());
                    }
                }
        );
        return list;
    }

    private List<Dept> deduplication(List<Dept> list) {
        List<Dept> deptDtos = new ArrayList<>();
        for (Dept deptDto : list) {
            boolean flag = true;
            for (Dept dto : list) {
                if (dto.getId().equals(deptDto.getPid())) {
                    flag = false;
                    break;
                }
            }
            if (flag){
                deptDtos.add(deptDto);
            }
        }
        return deptDtos;
    }

	@Override
	public List<Dept> findByRoleId(Long roleId) {
		return baseMapper.findByRoleId(roleId);
	}
	

    private void updateSubCnt(Long deptId){
        if(deptId != null){
            int count = baseMapper.countByPid(deptId);
            baseMapper.updateSubCntById(count, deptId);
        }
    }
    

    @Override
    public void verification(Set<Dept> deptDtos) {
        List<Long> deptIds = deptDtos.stream().map(Dept::getId).collect(Collectors.toList());
        if(baseMapper.countByDepts(deptIds) > 0){
            throw new BadRequestException("所选部门存在用户关联，请解除后再试！");
        }
        if(baseMapper.countByDepts(deptIds) > 0){
            throw new BadRequestException("所选部门存在角色关联，请解除后再试！");
        }
    }
    

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(Set<Dept> deptDtos) {
        for (Dept deptDto : deptDtos) {
            // 清理缓存
            delCaches(deptDto.getId());
            baseMapper.deleteById(deptDto.getId());
            updateSubCnt(deptDto.getPid());
        }
    }
    
    /**
     * 清理缓存
     * @param id /
     */
    public void delCaches(Long id){
        List<User> users = baseMapper.findByDeptRoleId(id);
        // 删除数据权限
        redisUtils.delByKeys("data::user:",users.stream().map(User::getId).collect(Collectors.toSet()));
        redisUtils.del("dept::id:" + id);
    }
	
}