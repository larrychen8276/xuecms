package com.xuecms.modules.system.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter @Setter
@TableName("sys_job")
public class Job implements Serializable {

	private static final long serialVersionUID = -3986361465684893883L;

    private Long id;

    private String name;

    private Long jobSort;

    private Boolean enabled;
    
    private Timestamp createTime;

    public Job(String name, Boolean enabled) {
        this.name = name;
        this.enabled = enabled;
    }
    
}