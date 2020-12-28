package com.xuecms.modules.tool.service.impl;

import java.util.List;
import java.util.Properties;

import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import cn.hutool.extra.mail.Mail;
import cn.hutool.extra.mail.MailAccount;
import lombok.extern.slf4j.Slf4j;
import com.xuecms.exception.BadRequestException;
import com.xuecms.modules.tool.domain.EmailConfig;
import com.xuecms.modules.tool.domain.vo.EmailVo;
import com.xuecms.modules.tool.mapper.EmailConfigMapper;
import com.xuecms.modules.tool.service.EmailService;
import com.xuecms.utils.EncryptUtils;

/**
 * @Description 角色业务实现
 * @Author Sans
 * @CreateTime 2019/6/14 15:57
 */
@Slf4j
@Service
public class EmailServiceImpl extends ServiceImpl<EmailConfigMapper, EmailConfig> implements EmailService {
    

    @Override
//    @CachePut(key = "'config'")
    @Transactional(rollbackFor = Exception.class)
    public int config(EmailConfig emailConfig, EmailConfig old) throws Exception {
        emailConfig.setId(1L);
        if(!emailConfig.getPass().equals(old.getPass())){
            // 对称加密
            emailConfig.setPass(EncryptUtils.desEncrypt(emailConfig.getPass()));
        }
        return this.baseMapper.insert(emailConfig);
    }
    

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void send(EmailVo emailVo, EmailConfig emailConfig){
        if(emailConfig.getId() == null){
            throw new BadRequestException("请先配置，再操作");
        }
        // 封装
        MailAccount account = new MailAccount();
        account.setUser(emailConfig.getUser());
        account.setHost(emailConfig.getHost());
        account.setPort(Integer.parseInt(emailConfig.getPort()));
        account.setAuth(true);
        try {
            // 对称解密
//            account.setPass(EncryptUtils.desDecrypt(emailConfig.getPass()));
        	account.setPass(emailConfig.getPass());
        } catch (Exception e) {
            throw new BadRequestException(e.getMessage());
        }
        account.setFrom(emailConfig.getUser()+"<"+emailConfig.getFromUser()+">");
        // ssl方式发送
        account.setSslEnable(true);
        // 使用STARTTLS安全连接
        account.setStarttlsEnable(true);
        String content = emailVo.getContent();
        // 发送
        try {
            int size = emailVo.getTos().size();
//            Mail.create(account)
//                    .setTos(emailVo.getTos().toArray(new String[size]))
//                    .setTitle(emailVo.getSubject())
//                    .setContent(content)
//                    .setHtml(true)
//                    //关闭session
//                    .setUseGlobalSession(false)
//                    .send();
    		
    		List<String> to = emailVo.getTos();
    		
    		boolean send = send163Mail(emailVo.getSubject(), content, to,
    				emailConfig.getHost(), emailConfig.getUser(), emailConfig.getUser(), emailConfig.getPass());
    		
            log.info("邮件发送状态 ：" +send);
            
        }catch (Exception e){
            throw new BadRequestException(e.getMessage());
        }
    }
    
    /**
	 * 163发送邮箱
	 * @param to
	 * @param title
	 * @param text
	 * @param from
	 * @param user
	 * @param password
	 */
	public static boolean send163Mail(String title,String text,
			List<String> targets, // 接收人
			String host, String from, String user, String password) {
		
		boolean status = true;
		
        Properties props = new Properties();
        props.setProperty("mail.smtp.host", host);//设置邮件服务器主机名
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.auth", "true");//发送服务器需要身份验证
        Session session = Session.getDefaultInstance(props);//设置环境信息
        session.setDebug(true);
        MimeMessage message = new MimeMessage(session);
        Multipart multipart = null;
        BodyPart contentPart = null;
        Transport transport = null;
        try {
            message.setFrom(from);//设置发件人
            
            if (targets != null) {
				InternetAddress[] addresses = new InternetAddress[targets.size()];
//				for (int i = 0; i < targets.size(); i++) {
//					JSONObject target = targets.getJSONObject(i);
//					addresses[i] = new InternetAddress(target.getString("address"), target.getString("name"));
//				}
				for (int i = 0; i < targets.size(); i++) {
					addresses[i] = new InternetAddress(targets.get(i), targets.get(i));
				}
				message.addRecipients(Message.RecipientType.TO, addresses);
			}
            
            message.setSubject(title);
            multipart = new MimeMultipart();//设置附件
            contentPart = new MimeBodyPart();
            contentPart.setContent(text, "text/html;charset=utf-8");
            multipart.addBodyPart(contentPart);
            message.setContent(multipart);
            message.saveChanges();
            transport = session.getTransport("smtp");
            transport.connect(host, user, password);
            transport.sendMessage(message, message.getAllRecipients());
            transport.close();
        } catch (Exception e) {
            e.printStackTrace();
            status = false;
        }
        
        return status;
	}
	
}