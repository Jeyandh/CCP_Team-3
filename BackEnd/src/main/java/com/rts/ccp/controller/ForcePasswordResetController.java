package com.rts.ccp.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rts.ccp.bean.Response;
import com.rts.ccp.service.EmailSendService;
import com.rts.ccp.service.ForcePasswordResetService;

import jakarta.mail.MessagingException;

@RestController
@CrossOrigin("http://localhost:4200/")
public class ForcePasswordResetController {
	
	
	@Autowired
	private ForcePasswordResetService service;

	
	@GetMapping("/ForcePassGenerate/{email}")
	public void  forcePassGenerate(@PathVariable("email") String email) throws MessagingException{
		service.generatePassword(email);
    }
}
