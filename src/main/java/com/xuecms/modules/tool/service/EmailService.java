package com.xuecms.modules.tool.service;

import com.baomidou.mybatisplus.extension.service.IService;

import com.xuecms.modules.tool.domain.EmailConfig;
import com.xuecms.modules.tool.domain.vo.EmailVo;

/**
 * @Description 角色业务接口
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
public interface EmailService extends IService<EmailConfig> {
	

    /**
     * 更新邮件配置
     * @param emailConfig 邮箱配置
     * @param old /
     * @return /
     * @throws Exception /
     */
	int config(EmailConfig emailConfig, EmailConfig old) throws Exception;
	

    /**
     * 发送邮件
     * @param emailVo 邮件发送的内容
     * @param emailConfig 邮件配置
     * @throws Exception /
     */
    void send(EmailVo emailVo, EmailConfig emailConfig);
	
}

