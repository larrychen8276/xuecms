package com.xuecms.modules.system.service.impl;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import lombok.RequiredArgsConstructor;
import com.xuecms.modules.system.mapper.MenuMapper;
import com.xuecms.modules.system.mapper.RoleMapper;
import com.xuecms.modules.system.mapper.UserMapper;
import com.xuecms.modules.system.service.MenuService;
import com.xuecms.modules.system.service.dto.MenuQueryCriteria;
import com.xuecms.utils.FileUtil;
import com.xuecms.utils.QueryHelp;
import com.xuecms.utils.RedisUtils;
import com.xuecms.utils.ValidationUtil;
import com.xuecms.exception.BadRequestException;
import com.xuecms.exception.EntityExistException;
import com.xuecms.modules.system.domain.Menu;
import com.xuecms.modules.system.domain.Role;
import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.domain.vo.MenuMetaVo;
import com.xuecms.modules.system.domain.vo.MenuVo;
import com.xuecms.modules.system.domain.vo.RoleMenuVo;

/**
 * @Description 角色业务实现
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Service
@RequiredArgsConstructor
public class MenuServiceImpl extends ServiceImpl<MenuMapper, Menu> implements MenuService {

	private final UserMapper userMapper;
	private final RoleMapper roleMapper;
	private final RedisUtils redisUtils;
	

	@Override
	public void insertBatch(List<RoleMenuVo> list) {
		baseMapper.insertBatch(list);
	}
	
    @Override
    public void download(List<Menu> menuDtos, HttpServletResponse response) throws IOException {
        List<Map<String, Object>> list = new ArrayList<>();
        for (Menu menuDTO : menuDtos) {
            Map<String,Object> map = new LinkedHashMap<>();
            map.put("菜单标题", menuDTO.getTitle());
            map.put("菜单类型", menuDTO.getType() == null ? "目录" : menuDTO.getType() == 1 ? "菜单" : "按钮");
            map.put("权限标识", menuDTO.getPermission());
            map.put("外链菜单", menuDTO.getIFrame() ? "是" : "否");
            map.put("菜单可见", menuDTO.getHidden() ? "否" : "是");
            map.put("是否缓存", menuDTO.getCache() ? "是" : "否");
//            map.put("创建日期", menuDTO.getCreateTime());
            list.add(map);
        }
        FileUtil.downloadExcel(list, response);
    }
	
    @Override
    public List<Menu> queryAll(MenuQueryCriteria criteria, Boolean isQuery) throws Exception {
//        Sort sort = new Sort(Sort.Direction.ASC, "menuSort");
        if(isQuery){
            criteria.setPidIsNull(true);
            List<Field> fields = QueryHelp.getAllFields(criteria.getClass(), new ArrayList<>());
            for (Field field : fields) {
                //设置对象的访问权限，保证对private的属性的访问
                field.setAccessible(true);
                Object val = field.get(criteria);
                if("pidIsNull".equals(field.getName())){
                    continue;
                }
                if (ObjectUtil.isNotNull(val)) {
                    criteria.setPidIsNull(null);
                    break;
                }
            }
        }
        
        System.out.println(criteria);
        
        QueryWrapper<Menu> wrapper = new QueryWrapper<>();
    	if(StringUtils.isNotBlank(criteria.getBlurry())) {
    		wrapper.like("title", criteria.getBlurry());
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
    	
    	List<Menu> list = baseMapper.selectList(wrapper);
        
        return list;
        
//        return menuRepository.findAll((root, criteriaQuery, criteriaBuilder) -> QueryHelp.getPredicate(root,criteria,criteriaBuilder));
    }
    

    @Override
    public List<Menu> getSuperior(Menu menuDto, List<Menu> menus) {
        if(menuDto.getPid() == null){
        	List<Menu> list = baseMapper.findByPidIsNull();
            menus.addAll(list);
            return menus;
        }
        menus.addAll(baseMapper.findByPid(menuDto.getPid()));
        return getSuperior(baseMapper.selectById(menuDto.getPid()), menus);
    }
    
    @Override
    public List<Menu> buildTree(List<Menu> menuDtos) {
        List<Menu> trees = new ArrayList<>();
        Set<Long> ids = new HashSet<>();
        for (Menu menuDTO : menuDtos) {
            if (menuDTO.getPid() == null) {
                trees.add(menuDTO);
            }
            for (Menu it : menuDtos) {
                if (menuDTO.getId().equals(it.getPid())) {
                    if (menuDTO.getChildren() == null) {
                        menuDTO.setChildren(new ArrayList<>());
                    }
                    menuDTO.getChildren().add(it);
                    ids.add(it.getId());
                }
            }
        }
        if(trees.size() == 0){
            trees = menuDtos.stream().filter(s -> !ids.contains(s.getId())).collect(Collectors.toList());
        }
        return trees;
    }

    @Override
    public List<MenuVo> buildMenus(List<Menu> menuDtos) {
        List<MenuVo> list = new LinkedList<>();
        menuDtos.forEach(menuDTO -> {
                    if (menuDTO!=null){
                        List<Menu> menuDtoList = menuDTO.getChildren();
                        MenuVo menuVo = new MenuVo();
                        menuVo.setName(ObjectUtil.isNotEmpty(menuDTO.getComponentName())  ? menuDTO.getComponentName() : menuDTO.getTitle());
                        // 一级目录需要加斜杠，不然会报警告
                        menuVo.setPath(menuDTO.getPid() == null ? "/" + menuDTO.getPath() :menuDTO.getPath());
                        menuVo.setHidden(menuDTO.getHidden());
                        // 如果不是外链
                        if(!menuDTO.getIFrame()){
                            if(menuDTO.getPid() == null){
                                menuVo.setComponent(StrUtil.isEmpty(menuDTO.getComponent())?"Layout":menuDTO.getComponent());
                            }else if(!StrUtil.isEmpty(menuDTO.getComponent())){
                                menuVo.setComponent(menuDTO.getComponent());
                            }
                        }
                        menuVo.setMeta(new MenuMetaVo(menuDTO.getTitle(),menuDTO.getIcon(),!menuDTO.getCache()));
                        if(menuDtoList !=null && menuDtoList.size()!=0){
                            menuVo.setAlwaysShow(true);
                            menuVo.setRedirect("noredirect");
                            menuVo.setChildren(buildMenus(menuDtoList));
                            // 处理是一级菜单并且没有子菜单的情况
                        } else if(menuDTO.getPid() == null){
                            MenuVo menuVo1 = new MenuVo();
                            menuVo1.setMeta(menuVo.getMeta());
                            // 非外链
                            if(!menuDTO.getIFrame()){
                                menuVo1.setPath("index");
                                menuVo1.setName(menuVo.getName());
                                menuVo1.setComponent(menuVo.getComponent());
                            } else {
                                menuVo1.setPath(menuDTO.getPath());
                            }
                            menuVo.setName(null);
                            menuVo.setMeta(null);
                            menuVo.setComponent("Layout");
                            List<MenuVo> list1 = new ArrayList<>();
                            list1.add(menuVo1);
                            menuVo.setChildren(list1);
                        }
                        list.add(menuVo);
                    }
                }
        );
        return list;
    }


    @Override
    public Set<Menu> getChildMenus(List<Menu> menuList, Set<Menu> menuSet) {
        for (Menu menu : menuList) {
            menuSet.add(menu);
            List<Menu> menus = baseMapper.findByPid(menu.getId());
            if(menus!=null && menus.size()!=0){
                getChildMenus(menus, menuSet);
            }
        }
        return menuSet;
    }
    
    @Override
    public List<Menu> getMenus(Long pid) {
        List<Menu> menus;
        if(pid != null && !pid.equals(0L)){
            menus = baseMapper.findByPid(pid);
        } else {
            menus = baseMapper.findByPidIsNull();
        }
        return menus;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(Set<Menu> menuSet) {
        for (Menu menu : menuSet) {
            // 清理缓存
            delCaches(menu.getId());
            roleMapper.untiedMenu(menu.getId());
            baseMapper.deleteById(menu.getId());
            updateSubCnt(menu.getPid());
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void create(Menu resources) {
    	
    	QueryWrapper<Menu> titleWrapper = new QueryWrapper<>();
        titleWrapper.eq("title", resources.getTitle());
        Menu menu1 = baseMapper.selectOne(titleWrapper);
        if(menu1 != null){
            throw new EntityExistException(Menu.class,"title",resources.getTitle());
        }
        if(StringUtils.isNotBlank(resources.getComponentName())){
        	QueryWrapper<Menu> nameWrapper = new QueryWrapper<>();
            nameWrapper.eq("name", resources.getComponentName());
            if(baseMapper.selectOne(nameWrapper) != null){
                throw new EntityExistException(Menu.class,"componentName",resources.getComponentName());
            }
        }
        if(resources.getPid().equals(0L)){
            resources.setPid(null);
        }
        if(resources.getIFrame()){
            String http = "http://", https = "https://";
            if (!(resources.getPath().toLowerCase().startsWith(http)||resources.getPath().toLowerCase().startsWith(https))) {
                throw new BadRequestException("外链必须以http://或者https://开头");
            }
        }
        baseMapper.insert(resources);
        // 计算子节点数目
        resources.setSubCount(0);
        // 更新父节点菜单数目
        updateSubCnt(resources.getPid());
    }
    
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(Menu resources) {
        if(resources.getId().equals(resources.getPid())) {
            throw new BadRequestException("上级不能为自己");
        }
        Menu menu = baseMapper.selectById(resources.getId());
        ValidationUtil.isNull(menu.getId(),"Permission","id",resources.getId());

        if(resources.getIFrame()){
            String http = "http://", https = "https://";
            if (!(resources.getPath().toLowerCase().startsWith(http)||resources.getPath().toLowerCase().startsWith(https))) {
                throw new BadRequestException("外链必须以http://或者https://开头");
            }
        }
        QueryWrapper<Menu> titleWrapper = new QueryWrapper<>();
        titleWrapper.eq("title", resources.getTitle());
        Menu menu1 = baseMapper.selectOne(titleWrapper);

        if(menu1 != null && !menu1.getId().equals(menu.getId())){
            throw new EntityExistException(Menu.class,"title",resources.getTitle());
        }

        if(resources.getPid().equals(0L)){
            resources.setPid(null);
        }

        // 记录的父节点ID
        Long oldPid = menu.getPid();
        Long newPid = resources.getPid();

        if(StringUtils.isNotBlank(resources.getComponentName())){
        	
        	QueryWrapper<Menu> nameWrapper = new QueryWrapper<>();
            nameWrapper.eq("name", resources.getComponentName());
            menu1 = baseMapper.selectOne(nameWrapper);
            if(menu1 != null && !menu1.getId().equals(menu.getId())){
                throw new EntityExistException(Menu.class,"componentName",resources.getComponentName());
            }
        }
        menu.setTitle(resources.getTitle());
        menu.setComponent(resources.getComponent());
        menu.setPath(resources.getPath());
        menu.setIcon(resources.getIcon());
        menu.setIFrame(resources.getIFrame());
        menu.setPid(resources.getPid());
        menu.setMenuSort(resources.getMenuSort());
        menu.setCache(resources.getCache());
        menu.setHidden(resources.getHidden());
        menu.setComponentName(resources.getComponentName());
        menu.setPermission(resources.getPermission());
        menu.setType(resources.getType());
        baseMapper.updateById(menu);
        // 计算父级菜单节点数目
        updateSubCnt(oldPid);
        updateSubCnt(newPid);
        // 清理缓存
        delCaches(resources.getId());
    }
    

    private void updateSubCnt(Long menuId){
        if(menuId != null){
            int count = baseMapper.countByPid(menuId);
            baseMapper.updateSubCntById(count, menuId);
        }
    }
    

    /**
     * 用户角色改变时需清理缓存
     * @param currentUserId /
     * @return /
     */
    @Override
//    @Cacheable(key = "'user:' + #p0")
    public List<Menu> findByUser(Long currentUserId) {
        List<Role> roles = roleMapper.findByUserId(currentUserId);
        List<Long> roleIds = roles.stream().map(Role::getId).collect(Collectors.toList());
        List<Menu> menus = baseMapper.findByRoleIdsAndTypeNot(roleIds, 2);
        
        return menus;
    }
    
    /**
     * 清理缓存
     * @param id 菜单ID
     */
    public void delCaches(Long id){
        List<User> users = userMapper.findByMenuId(id);
        redisUtils.del("menu::id:" +id);
        redisUtils.delByKeys("menu::user:",users.stream().map(User::getId).collect(Collectors.toSet()));
        // 清除 Role 缓存
        List<Role> roles = roleMapper.findInMenuId(new ArrayList<Long>(){{
            add(id);
        }});
        redisUtils.delByKeys("role::id:",roles.stream().map(Role::getId).collect(Collectors.toSet()));
    }

	@Override
	public List<Menu> findByRoleId(Long roleId) {
		return baseMapper.findByRoleId(roleId);
	}
}