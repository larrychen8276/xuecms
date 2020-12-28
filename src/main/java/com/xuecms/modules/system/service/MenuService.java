package com.xuecms.modules.system.service;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import com.baomidou.mybatisplus.extension.service.IService;

import com.xuecms.modules.system.domain.Menu;
import com.xuecms.modules.system.domain.vo.RoleMenuVo;
import com.xuecms.modules.system.service.dto.MenuQueryCriteria;

/**
 * @Description 角色业务接口
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
public interface MenuService extends IService<Menu> {
    
	void insertBatch(List<RoleMenuVo> list);
	
    /**
     * 导出
     * @param queryAll 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void download(List<Menu> queryAll, HttpServletResponse response) throws IOException;

    /**
     * 删除
     * @param menuSet /
     */
    void delete(Set<Menu> menuSet);
    
    /**
     * 查询全部数据
     * @param criteria 条件
     * @param isQuery /
     * @throws Exception /
     * @return /
     */
    List<Menu> queryAll(MenuQueryCriteria criteria, Boolean isQuery) throws Exception;
    

    /**
     * 根据ID获取同级与上级数据
     * @param menuDto /
     * @param objects /
     * @return /
     */
    List<Menu> getSuperior(Menu menuDto, List<Menu> objects);
    

    /**
     * 构建菜单树
     * @param menuDtos 原始数据
     * @return /
     */
    List<Menu> buildTree(List<Menu> menuDtos);

    /**
     * 构建菜单树
     * @param menuDtos /
     * @return /
     */
    Object buildMenus(List<Menu> menuDtos);

    /**
     * 懒加载菜单数据
     * @param pid /
     * @return /
     */
    List<Menu> getMenus(Long pid);
    
    /**
     * 创建
     * @param resources /
     */
    void create(Menu resources);
    
    /**
     * 编辑
     * @param resources /
     */
    void update(Menu resources);
    

    /**
     * 获取所有子节点，包含自身ID
     * @param menuList /
     * @param menuSet /
     * @return /
     */
    Set<Menu> getChildMenus(List<Menu> menuList, Set<Menu> menuSet);

    /**
     * 根据当前用户获取菜单
     * @param currentUserId /
     * @return /
     */
    List<Menu> findByUser(Long currentUserId);
    

    /**
     * 根据用户ID查询
     * @param id 用户ID
     * @return /
     */
    List<Menu> findByRoleId(Long roleId);
	
}

