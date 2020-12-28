package com.xuecms.modules.tool.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * 邮件配置类，数据存覆盖式存入数据存
 */
@NoArgsConstructor
@Getter @Setter
@TableName("tool_email_config")
public class EmailConfig implements Serializable {

	private static final long serialVersionUID = -8089181291215689562L;

	@TableId(value = "config_id", type = IdType.AUTO)
    private Long id;

    private String fromUser;
    
    private String host;

    private String pass;
    
    private String port;

    private String user;


}
