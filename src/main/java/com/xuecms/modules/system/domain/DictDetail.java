package com.xuecms.modules.system.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

@NoArgsConstructor
@Getter @Setter
@TableName("sys_dict_detail")
public class DictDetail implements Serializable {

	private static final long serialVersionUID = -2723965745270532596L;

	@TableId(value = "detail_id", type = IdType.AUTO)
    private Long id;

//    @JoinColumn(name = "dict_id")
//    @ManyToOne(fetch=FetchType.LAZY)
//    @ApiModelProperty(value = "字典", hidden = true)
	@TableField(exist = false)
    private Dict dict;
	
	private Long dictId;

    @ApiModelProperty(value = "字典标签")
    private String label;

    @ApiModelProperty(value = "字典值")
    private String value;

    @ApiModelProperty(value = "排序")
    private Integer dictSort = 999;
}