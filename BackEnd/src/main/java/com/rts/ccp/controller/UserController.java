package com.rts.ccp.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rts.ccp.bean.User;
import com.rts.ccp.dto.UserDTO;
import com.rts.ccp.service.UserService;

import java.util.List;
 
@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {
 
    @Autowired
    private UserService userService;
 
    @PostMapping("/insertUsers")
    public void performInsert(@RequestBody UserDTO user) {
        userService.saveOrUpdateUser(user);
    }
 
    @PutMapping("/updateUsers")
    public void performUpdate(@RequestBody UserDTO user) {
        userService.saveOrUpdateUser(user);
    }
 
    @DeleteMapping("/deleteUsers/{userId}")
    public void performDelete(@PathVariable Long userId) {
        userService.deleteUserById(userId);
    }
 
//    @GetMapping("/findAllUsers")
//    public List<User> viewAllUsers() {
//        return userService.getAllUsers();
//    }
//    
 
    @GetMapping("/findAllEmployees")
    public List<UserDTO> viewAllEmployees() {
        return userService.getAllEmployees();
    }
    @GetMapping("/MapAllEmployees")
    public List<UserDTO> mapEmployees() {
        return userService.getEmployeesToMap();
    }

    @GetMapping("/userFirstName")
	public List<User> userFindname(@RequestParam String user) {
		return userService.getDetails(user);
	}
    
    @GetMapping("/findProjectUser/{userId}")
	public List<Long> findProject(@PathVariable  long userId ) {
		return userService.findUserProject(userId);
	}
    
}