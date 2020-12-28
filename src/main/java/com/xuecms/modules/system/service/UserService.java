package com.xuecms.modules.system.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.baomidou.mybatisplus.extension.service.IService;

import com.xuecms.modules.system.domain.User;
import com.xuecms.modules.system.service.dto.UserQueryCriteria;

/**
 * @Description 角色业务接口
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
public interface UserService extends IService<User> {
    

    /**
     * 新增用户
     * @param resources /
     */
    void create(User resources);

    /**
     * 编辑用户
     * @param resources /
     */
    void update(User resources);

    /**
     * 删除用户
     * @param ids /
     */
    void delete(List<Long> ids);
    
    /**
     * 根据用户名查询
     * @param userName /
     * @return /
     */
	User findByName(String userName);
	

    /**
     * 修改密码
     * @param username 用户名
     * @param encryptPassword 密码
     */
    void updatePass(String username, String encryptPassword);

    /**
     * 修改头像
     * @param file 文件
     * @return /
     */
    Map<String, String> updateAvatar(MultipartFile file);

    /**
     * 修改邮箱
     * @param username 用户名
     * @param email 邮箱
     */
    void updateEmail(String username, String email);
	
	List<User> findByRoleId(Long roleId);
	
	int countByRoles(List<Long> ids);
	

    /**
     * 查询全部
     * @param criteria 条件
     * @param pageable 分页参数
     * @return /
     */
//    Object queryAll(UserQueryCriteria criteria, Pageable pageable);
	
    Object queryAll(UserQueryCriteria criteria, Pageable pageable);
    
    List<User> queryAll(UserQueryCriteria criteria);
    
    /**
     * 导出数据
     * @param queryAll 待导出的数据
     * @param response /
     * @throws IOException /
     */
    void download(List<User> queryAll, HttpServletResponse response) throws IOException;
    
    /**
     * 用户自助修改资料
     * @param resources /
     */
    void updateCenter(User resources);
}

