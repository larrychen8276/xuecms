package com.xuecms.modules.system.service.dto;

import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;

@Getter
@Setter
public class DictSmallDto implements Serializable {

	private static final long serialVersionUID = -7184865986514546763L;

	private Long id;

    private String name;
}
