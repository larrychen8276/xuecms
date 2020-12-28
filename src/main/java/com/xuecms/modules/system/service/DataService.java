package com.xuecms.modules.system.service;

import java.util.List;

import com.xuecms.modules.system.domain.User;

/**
 * 数据权限服务类
 */
public interface DataService {

    /**
     * 获取数据权限
     * @param user /
     * @return /
     */
    List<Long> getDeptIds(User user);
}
