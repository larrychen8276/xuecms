package com.xuecms.modules.tool.rest;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import com.xuecms.annotation.Log;
import com.xuecms.modules.tool.domain.vo.EmailVo;
import com.xuecms.modules.tool.domain.EmailConfig;
import com.xuecms.modules.tool.service.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * 发送邮件
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("api/email")
@Api(tags = "工具：邮件管理")
public class EmailController {

    private final EmailService emailService;

    @GetMapping
    public ResponseEntity<Object> queryConfig(){
    	EmailConfig entity = emailService.getById(1);
    	if(entity == null) {
    		entity = new EmailConfig();
    	}
    	
        return new ResponseEntity<>(entity, HttpStatus.OK);
    }

    @Log("配置邮件")
    @PutMapping
    @ApiOperation("配置邮件")
    public ResponseEntity<Object> updateConfig(@Validated @RequestBody EmailConfig emailConfig) throws Exception {
        EmailConfig entity = emailService.getById(1);
        emailService.config(emailConfig, entity);
        
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Log("发送邮件")
    @PostMapping
    @ApiOperation("发送邮件")
    public ResponseEntity<Object> sendEmail(@Validated @RequestBody EmailVo emailVo){
    	EmailConfig entity = emailService.getById(1);
    	
    	emailService.send(emailVo, entity);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
