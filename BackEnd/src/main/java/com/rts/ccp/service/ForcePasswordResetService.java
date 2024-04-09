package com.rts.ccp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.rts.ccp.bean.Login;
import com.rts.ccp.bean.User;
import com.rts.ccp.dto.LoginDTO;
import com.rts.ccp.repository.UserRepo;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class ForcePasswordResetService {

	 @Autowired
	 private JavaMailSender mailSender;
	 
	 @Autowired
	 private UserRepo userRepo;
	 
	 
	 
	 @Autowired
	 private  LoginService loginservice;
	 
	 @Autowired
	 private LoginDTO logindto;
	 
	 
	 private Long userId;
	 
	 private String userPassword;
	 
	 public String generatePassword(String email) throws MessagingException {
		 User user = userRepo.findByUserEmailId(email);
		 userId = user.getUserId();
		 userPassword = "Password@"+(Long.toString(userId));
		 insertLogin(email, userPassword, userId);
		 sendpasswordToMail(email,userPassword);
		 return "Success";
	 }
	 
	 public void insertLogin(String email,String password,Long userId) {
		 logindto =  new LoginDTO();
		 logindto.setUserType("employee");
		 logindto.setUserEmailId(email);
		 logindto.setUser(userId);
		 logindto.setPassword(password);
		 loginservice.saveOrUpdateLogin(logindto);
		
	 }
	 
	 private void sendpasswordToMail(String email, String password) throws MessagingException {
	        MimeMessage mimeMessage = mailSender.createMimeMessage();
	        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
	        mimeMessageHelper.setTo(email);
	        mimeMessageHelper.setSubject("Welcome to Relevantz");
	        mimeMessageHelper.setText("Here is your Login credentials \n Email"+email+"\n"+"password :"+password);
	        mailSender.send(mimeMessage);
	    }
	 
	 public void sendpasswordService(String email,String password) throws MessagingException {
	        
	        	sendpasswordToMail(email, password);
	        
	    }
	 
	 
	 
	 
}
