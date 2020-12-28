package com.xuecms.modules.system.service;

import com.xuecms.modules.system.domain.Dept;
import com.xuecms.modules.system.domain.vo.RoleDeptVo;
import com.xuecms.modules.system.service.dto.DeptQueryCriteria;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import com.baomidou.mybatisplus.extension.service.IService;

public interface DeptService extends IService<Dept> {
    
	void insertBatch(List<RoleDeptVo> list);
	
	void untiedDeptByRoleId(Long roleId);
	
    /**
     * 创建
     * @param resources /
     */
    void create(Dept resources);

    /**
     * 编辑
     * @param resources /
     */
    void update(Dept resources);

    /**
     * 查询所有数据
     * @param criteria 条件
     * @param isQuery /
     * @throws Exception /
     * @return /
     */
    List<Dept> queryAll(DeptQueryCriteria criteria, Boolean isQuery) throws Exception;
    

    /**
     * 根据ID查询
     * @param id /
     * @return /
     */
    Dept findById(Long id);
    

    /**
     * 获取待删除的部门
     * @param deptList /
     * @param deptDtos /
     * @return /
     */
    Set<Dept> getDeleteDepts(List<Dept> deptList, Set<Dept> deptDtos);
    
    /**
     * 根据PID查询
     * @param pid /
     * @return /
     */
    List<Dept> findByPid(long pid);

    /**
     * 导出数据
     * @param queryAll 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void download(List<Dept> queryAll, HttpServletResponse response) throws IOException;
	
	/**
     * 根据ID获取同级与上级数据
     * @param deptDto /
     * @param depts /
     * @return /
     */
    List<Dept> getSuperior(Dept deptDto, List<Dept> depts);
    

    /**
     * 构建树形数据
     * @param deptDtos /
     * @return /
     */
    Object buildTree(List<Dept> deptDtos);
    

    /**
     * 获取
     * @param deptList
     * @return
     */
    List<Long> getDeptChildren(List<Dept> deptList);
    

    /**
     * 根据用户ID查询
     * @param id 用户ID
     * @return /
     */
    List<Dept> findByRoleId(Long roleId);
    

    /**
     * 验证是否被角色或用户关联
     * @param deptDtos /
     */
    void verification(Set<Dept> deptDtos);
    

    /**
     * 删除
     * @param deptDtos /
     *
     */
    void delete(Set<Dept> deptDtos);
	
}