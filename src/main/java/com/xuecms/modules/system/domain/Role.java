package com.xuecms.modules.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.xuecms.utils.enums.DataScopeEnum;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

/**
 * 角色
 */
@NoArgsConstructor
@Getter @Setter
@TableName("sys_role")
public class Role implements Serializable {

	private static final long serialVersionUID = -2508732460024682981L;

	@TableId(value = "role_id", type = IdType.AUTO)
    private Long id;

//    @JsonIgnore
//    @ManyToMany(mappedBy = "roles")
//    @ApiModelProperty(value = "用户", hidden = true)
	@TableField(exist = false)
    private Set<User> users;

//    @ManyToMany
//    @JoinTable(name = "sys_roles_menus",
//            joinColumns = {@JoinColumn(name = "role_id",referencedColumnName = "role_id")},
//            inverseJoinColumns = {@JoinColumn(name = "menu_id",referencedColumnName = "menu_id")})
//    @ApiModelProperty(value = "菜单", hidden = true)
    @TableField(exist = false)
    private List<Menu> menus;

//    @ManyToMany
//    @JoinTable(name = "sys_roles_depts",
//            joinColumns = {@JoinColumn(name = "role_id",referencedColumnName = "role_id")},
//            inverseJoinColumns = {@JoinColumn(name = "dept_id",referencedColumnName = "id")})
//    @ApiModelProperty(value = "部门", hidden = true)
    @TableField(exist = false)
    private List<Dept> depts;

    private String name;

//    @ApiModelProperty(value = "数据权限，全部 、 本级 、 自定义")
    private String dataScope = DataScopeEnum.THIS_LEVEL.getValue();

//    @ApiModelProperty(value = "级别，数值越小，级别越大")
    private Integer level = 3;

//    @ApiModelProperty(value = "描述")
    private String description;

}
