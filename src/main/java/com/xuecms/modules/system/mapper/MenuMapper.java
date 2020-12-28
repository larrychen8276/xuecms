package com.xuecms.modules.system.mapper;

import com.xuecms.modules.system.domain.Menu;
import com.xuecms.modules.system.domain.vo.RoleMenuVo;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @Description 角色DAO
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Mapper
public interface MenuMapper extends BaseMapper<Menu> {

	void insertBatch(List<RoleMenuVo> list);
	
    void untiedMenuByRoleId(Long roleId);
    
    /**
     * 获取节点数量
     * @param id /
     * @return /
     */
    int countByPid(Long id);
    

    /**
     * 更新节点数目
     * @param count /
     * @param menuId /
     */
    void updateSubCntById(@Param("count") int count, @Param("menuId") Long menuId);

    /**
     * 查询顶级菜单
     * @return /
     */
    List<Menu> findByPidIsNull();
    

    /**
     * 根据菜单的 PID 查询
     * @param pid /
     * @return /
     */
    List<Menu> findByPid(long pid);
    
    /**
     * 根据角色ID与菜单类型查询菜单
     * @param roleIds roleIDs
     * @param type 类型
     * @return /
     */
    List<Menu> findByRoleIdsAndTypeNot(@Param("roleIds") List<Long> roleIds, @Param("type") int type);
    
    List<Menu> findByRoleId(Long roleId);
	
}
