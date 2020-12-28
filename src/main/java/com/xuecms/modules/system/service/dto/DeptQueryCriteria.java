package com.xuecms.modules.system.service.dto;

import lombok.Data;
import com.xuecms.annotation.DataPermission;
import com.xuecms.annotation.Query;
import java.sql.Timestamp;
import java.util.List;

@Data
@DataPermission(fieldName = "id")
public class DeptQueryCriteria{

    @Query(type = Query.Type.INNER_LIKE)
    private String name;

    @Query
    private Boolean enabled;

    @Query
    private Long pid;

    @Query(type = Query.Type.IS_NULL, propName = "pid")
    private Boolean pidIsNull;

    @Query(type = Query.Type.BETWEEN)
    private List<Timestamp> createTime;
}