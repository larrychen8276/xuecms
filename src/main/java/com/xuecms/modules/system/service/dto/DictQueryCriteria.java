package com.xuecms.modules.system.service.dto;

import lombok.Data;
import com.xuecms.annotation.Query;

/**
 * 公共查询类
 */
@Data
public class DictQueryCriteria {

    @Query(blurry = "name,description")
    private String blurry;
}
