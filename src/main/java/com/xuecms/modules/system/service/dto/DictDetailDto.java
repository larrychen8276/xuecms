package com.xuecms.modules.system.service.dto;

import lombok.Getter;
import lombok.Setter;
import com.xuecms.base.BaseDTO;
import com.xuecms.modules.system.domain.Dict;

import java.io.Serializable;

@Getter
@Setter
public class DictDetailDto extends BaseDTO implements Serializable {

	private static final long serialVersionUID = 6543560399743146588L;

	private Long id;

    private Dict dict;

    private String label;

    private String value;

    private Integer dictSort;
}