package com.xuecms.modules.system.service.dto;

import lombok.Getter;
import lombok.Setter;
import com.xuecms.base.BaseDTO;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class DictDto extends BaseDTO implements Serializable {

	private static final long serialVersionUID = 8253663700420290748L;

	private Long id;

    private List<DictDetailDto> dictDetails;

    private String name;

    private String description;
}
