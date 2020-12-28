package com.xuecms.modules.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Getter @Setter
@TableName("sys_menu")
public class Menu implements Serializable {

	private static final long serialVersionUID = 220854964201555138L;

	@TableId(value = "menu_id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "上级菜单")
    private Long pid;

    @ApiModelProperty(value = "子节点数目", hidden = true)
    private Integer subCount = 0;

    @ApiModelProperty(value = "菜单类型，目录、菜单、按钮")
    private Integer type;

    @ApiModelProperty(value = "菜单标题")
    private String title;
    
//    @Column(name = "name")
    @TableField(value = "name")
    @ApiModelProperty(value = "菜单组件名称")
    private String componentName;

    @ApiModelProperty(value = "组件路径")
    private String component;

    @ApiModelProperty(value = "排序")
    private Integer menuSort = 999;

    @ApiModelProperty(value = "菜单图标")
    private String icon;

    @ApiModelProperty(value = "路由地址")
    private String path;

    @ApiModelProperty(value = "外链菜单")
    private Boolean iFrame;

    @Column(columnDefinition = "bit(1) default 0")
    @ApiModelProperty(value = "缓存")
    private Boolean cache;

    @Column(columnDefinition = "bit(1) default 0")
    @ApiModelProperty(value = "是否隐藏")
    private Boolean hidden;

    @ApiModelProperty(value = "权限标识")
    private String permission;


//    @JsonIgnore
//    @ManyToMany(mappedBy = "menus")
//    @ApiModelProperty(value = "菜单角色")
    @TableField(exist = false)
    private Set<Role> roles;

    
////////////////////////////////MenuDto() 字段 //////////////////////////////////////////
    
    @TableField(exist = false)//表示不存在就忽略,若数据库表不存在该字段，那就不查。
    private List<Menu> children;
    
    // TODO:注意这里只有子菜单 > 0 才会显示
    public Boolean getHasChildren() {
        return subCount > 0;
    }

    public Boolean getLeaf() {
        return subCount <= 0;
    }

    public String getLabel() {
        return title;
    }
    
////////////////////////////////MenuDto() 字段 //////////////////////////////////////////
    
}
