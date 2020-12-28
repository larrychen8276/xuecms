package com.xuecms.modules.system.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.io.Serializable;

@Data
@AllArgsConstructor
public class MenuMetaVo implements Serializable {

	private static final long serialVersionUID = 1299016706037275835L;

	private String title;

    private String icon;

    private Boolean noCache;
}
