package com.xuecms.modules.system.domain.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.io.Serializable;

@Data
@AllArgsConstructor
public class RoleDeptVo implements Serializable {

	private static final long serialVersionUID = 1299016706037275835L;

	private Long roleId;

    private Long deptId;

}
