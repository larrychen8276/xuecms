package com.xuecms.modules.quartz.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.hibernate.annotations.CreationTimestamp;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.sql.Timestamp;

@NoArgsConstructor
@Getter @Setter
@TableName("sys_quartz_log")
public class QuartzLog implements Serializable {

	private static final long serialVersionUID = 8727721769134096490L;

	@TableId(value = "log_id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "bean名称", hidden = true)
    private String beanName;

    @CreationTimestamp
    @ApiModelProperty(value = "创建时间", hidden = true)
    private Timestamp createTime;

    @ApiModelProperty(value = "cron表达式", hidden = true)
    private String cronExpression;

    @ApiModelProperty(value = "异常详情", hidden = true)
    private String exceptionDetail;

    @ApiModelProperty(value = "状态", hidden = true)
    private Boolean isSuccess;

    @ApiModelProperty(value = "任务名称", hidden = true)
    private String jobName;

    @ApiModelProperty(value = "方法名称", hidden = true)
    private String methodName;

    @ApiModelProperty(value = "参数", hidden = true)
    private String params;

    @ApiModelProperty(value = "执行耗时", hidden = true)
    private Long time;
}
