package com.xuecms.modules.system.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Getter @Setter
@TableName("sys_dept")
public class Dept implements Serializable {

	private static final long serialVersionUID = -3895629900406499818L;

	private Long id;
    
	@TableField(exist = false)//表示不存在就忽略,若数据库表不存在该字段，那就不查。
    private Set<Role> roles;

    private Integer deptSort;

    private String name;

    private Boolean enabled;

    private Long pid;

    private Integer subCount = 0;
    
    private Timestamp createTime;
    
////////////////////////////////DeptDto() 字段 //////////////////////////////////////////
    
    @TableField(exist = false)//表示不存在就忽略,若数据库表不存在该字段，那就不查。
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private List<Dept> children;
    

    public Boolean getHasChildren() {
        return subCount > 0;
    }

    public Boolean getLeaf() {
        return subCount <= 0;
    }

    public String getLabel() {
        return name;
    }
    
////////////////////////////////DeptDto() 字段 //////////////////////////////////////////
    
}