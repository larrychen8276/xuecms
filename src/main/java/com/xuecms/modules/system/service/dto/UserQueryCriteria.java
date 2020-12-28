package com.xuecms.modules.system.service.dto;

import lombok.Data;
import com.xuecms.annotation.Query;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
public class UserQueryCriteria implements Serializable {

	private static final long serialVersionUID = 658830821482452064L;

	@Query
    private Long id;

    @Query(propName = "id", type = Query.Type.IN, joinName = "dept")
    private List<Long> deptIds = new ArrayList<>();

    @Query(blurry = "email,username,nickName")
    private String blurry;

    @Query
    private Boolean enabled;

    private Long deptId;

    @Query(type = Query.Type.BETWEEN)
    private List<Timestamp> createTime;
    
    private Timestamp startTime;
    
    private Timestamp endTime;
    
    
}
