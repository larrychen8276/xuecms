package com.xuecms.modules.system.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter @Setter
@TableName("sys_user")
public class User implements Serializable {

	private static final long serialVersionUID = 6226693154242753446L;

	@TableId(value = "user_id", type = IdType.AUTO)
    private Long id;

//    @ManyToMany
//    @ApiModelProperty(value = "用户角色")
//    @JoinTable(name = "sys_users_roles",
//            joinColumns = {@JoinColumn(name = "user_id",referencedColumnName = "user_id")},
//            inverseJoinColumns = {@JoinColumn(name = "role_id",referencedColumnName = "role_id")})
	@TableField(exist = false)
    private List<Role> roles;

//    @ManyToMany
//    @ApiModelProperty(value = "用户岗位")
//    @JoinTable(name = "sys_users_jobs",
//            joinColumns = {@JoinColumn(name = "user_id",referencedColumnName = "user_id")},
//            inverseJoinColumns = {@JoinColumn(name = "job_id",referencedColumnName = "id")})
	@TableField(exist = false)
    private List<Job> jobs;

//    @OneToOne
//    @JoinColumn(name = "dept_id")
//    @ApiModelProperty(value = "用户部门")
	@TableField(exist = false)
    private Dept dept;
	
	private Long deptId;

//    @NotBlank
//    @Column(unique = true)
//    @ApiModelProperty(value = "用户名称")
    private String username;

//    @NotBlank
//    @ApiModelProperty(value = "用户昵称")
    private String nickName;

//  @ApiModelProperty(value = "用户性别")
    private String gender;

//  @NotBlank
//  @ApiModelProperty(value = "电话号码")
    private String phone;

//    @Email
//    @NotBlank
//    @ApiModelProperty(value = "邮箱")
    private String email;

//    @ApiModelProperty(value = "头像真实名称",hidden = true)
    private String avatarName;

//    @ApiModelProperty(value = "头像存储的路径", hidden = true)
    private String avatarPath;

//    @ApiModelProperty(value = "密码")
    private String password;

//  @ApiModelProperty(value = "是否为admin账号", hidden = true)
    private Boolean isAdmin = false;
  
//    @NotNull
//    @ApiModelProperty(value = "是否启用")
    private Boolean enabled;


//    @Column(name = "pwd_reset_time")
//    @ApiModelProperty(value = "最后修改密码的时间", hidden = true)
    private Date pwdResetTime;
    
    private Timestamp createTime;
}