package com.rts.ccp.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.rts.ccp.bean.Login;
import com.rts.ccp.bean.Response;
import com.rts.ccp.dto.LoginDTO;
import com.rts.ccp.dto.ProjectDTO;
import com.rts.ccp.service.EmailSendService;
import com.rts.ccp.service.LoginService;
import com.rts.ccp.service.UserService;
import com.rts.ccp.util.JwtUtil;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
 
@RestController
@CrossOrigin("http://localhost:4200/")
public class LoginController {
 
    @Autowired
    private LoginService loginService;
 
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private EmailSendService sendService;
    
    @Autowired
    private UserService userService;
    
    @PostMapping("/insertLogin")
    public void performInsert(@RequestBody LoginDTO logindto) {
    	loginService.saveOrUpdateLogin(logindto);
    }

 
    @DeleteMapping("/Logins/{emailId}")
    public void performDelete(@PathVariable String emailId) {
        loginService.deleteLoginByEmailId(emailId);
    }
 
    @GetMapping("/Logins")
    public List<Login> viewAllLogins() {
        return loginService.getAllLogins();
    }
 
        
    //new method
    
    @PostMapping("/login")
	public ResponseEntity<Map<String, String>> verifyLogin(@RequestBody Login loginRequest) {
		if (loginService.verifyLogin(loginRequest.getUserEmailId()).equals("Failed")) {
			Map<String, String> response = new HashMap<>();
			response.put("message", "Email not found");
			return ResponseEntity.badRequest().body(response);
		} else {
			if (loginService.isLoginDisabled(loginRequest.getUserEmailId())) {
				Map<String, String> response = new HashMap<>();
				response.put("message", "Login disabled. Try again after 5 minutes.");
				return ResponseEntity.badRequest().body(response);
			}
 
			String email = loginService.verifyLogin(loginRequest.getUserEmailId(), loginRequest.getPassword());
 
			if (email != null) {
				Map<String, String> response = new HashMap<>();
				loginService.resetLoginAttempts(loginRequest.getUserEmailId());
				if(loginService.verifyNewUser(email)) {
					response.put("message", "newUser");
					return ResponseEntity.ok(response);
				}
				String userType = loginService.getUserTypeByEmail(email);
				String token = jwtUtil.generateToken(email, userType);
				Long userId = loginService.getUserIdByEmail(email);
				List<Long> list=userService.findUserProject(userId);
				
				response.put("token", token);
				response.put("userType", userType);
				response.put("email", email);
				response.put("userId", Long.toString(userId));
				response.put("projectId", list.toString());
				response.put("regionId",loginService.getRegionIdByEmail(email).toString());
				response.put("departmentId", loginService.getDepartmentIdByEmail(email).toString());
				sendService.sendOtpService(email);
				return ResponseEntity.ok(response);
 
			} else {
 
				loginService.updateFailedLoginAttempts(loginRequest.getUserEmailId());
				Map<String, String> response = new HashMap<>();
 
				int attempts = loginService.getLoginAttempts(loginRequest.getUserEmailId());
 
				if (attempts < 3) {
					response.put("message", "Login failed. Invalid credentials.");
				} else if (attempts == 3) {
					response.put("message", "Login failed. 2 attempts remaining.");
				} else if (attempts == 4) {
					response.put("message", "Login failed. 1 attempts remaining.");
				} else if (attempts == 5) {
					response.put("message", "Login failed. 1 attempts remaining.");
				}
				return ResponseEntity.badRequest().body(response);
 
			}
		}
	}
        
        
       
    }