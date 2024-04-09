package com.rts.ccp.service;
 
import org.springframework.beans.factory.annotation.Autowired;
 
import org.springframework.stereotype.Service;

import com.rts.ccp.bean.Department;
import com.rts.ccp.bean.Project;
import com.rts.ccp.bean.Region;
import com.rts.ccp.bean.User;
import com.rts.ccp.dto.DepartmentDTO;
import com.rts.ccp.dto.UserDTO;
import com.rts.ccp.repository.DepartmentRepo;
import com.rts.ccp.repository.ProjectRepo;
import com.rts.ccp.repository.RegionRepo;
import com.rts.ccp.repository.UserRepo;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
 
@Service
 
public class UserService {
 
	@Autowired
 
	private UserRepo userRepo;
 
	@Autowired
 
	private Department department;
 
	@Autowired
 
	private DepartmentRepo departmentDAO;
 
	@Autowired
 
	private Region region;
 
	@Autowired
 
	private RegionRepo regdao;
 
	@Autowired
 
	private ProjectRepo projectdao;
 
	public boolean saveOrUpdateUser(UserDTO userdto) {
 
		User user = new User();
 
		user.setUserId(userdto.getUserId());
 
		user.setUserFirstName(userdto.getUserFirstName());
 
		user.setUserLastName(userdto.getUserLastName());
 
		user.setUserEmailId(userdto.getUserEmailId());
 
		user.setUserType(userdto.getUserType());
 
		user.setUserMobileNumber(userdto.getUserMobileNumber());
 
		department = departmentDAO.findById(userdto.getDepartment()).get();
 
		user.setDepartment(department);
 
		region = regdao.findById(userdto.getRegion()).get();
 
		user.setRegion(region);
 
		List<Long> projectId = userdto.getProject();
 
		if (projectId != null && !projectId.isEmpty()) {
 
			List<Project> projects = projectdao.findAllById(projectId);
 
			user.setProject(projects);
 
		}
 
		userRepo.save(user);
 
		return true;
 
	}
 
	public boolean deleteUserById(Long userId) {
 
		userRepo.deleteById(userId);
 
		return true;
 
	}
 
	public List<User> getAllUsers() {
 
		return (List<User>) userRepo.findAll();
 
	}

 
	public List<UserDTO> getAllEmployees() {
		Iterator<User> iterator = userRepo.viewAllEmployees().iterator();
		List<UserDTO> userList = new ArrayList<>();
		while (iterator.hasNext()) {

 
			User user = iterator.next();
			UserDTO userdto = new UserDTO();
			if(user.getDepartment()!=null || user.getRegion()!=null)
			{
			userdto.setUserId(user.getUserId());
			userdto.setUserFirstName(user.getUserFirstName());
 
			userdto.setUserLastName(user.getUserLastName());
 
			userdto.setUserEmailId(user.getUserEmailId());
 
 
			userdto.setUserType(user.getUserType());
			userdto.setUserMobileNumber(user.getUserMobileNumber());
		userdto.setDepartment(user.getDepartment().getDepartmentId());
		userdto.setDepartmentName(user.getDepartment().getDepartmentName());
		userdto.setRegion(user.getRegion().getRegionId());
		userdto.setRegionName(user.getRegion().getRegionName());



 
			userList.add(userdto);
			}
		}
		return userList;


	}
	//Employee are going to map using this function
public List<UserDTO> getEmployeesToMap() {
		Iterator<User> iterator = userRepo.viewAllEmployees().iterator();
		List<UserDTO> userList = new ArrayList<>();
		while (iterator.hasNext()) {
 
			User user = iterator.next();
			UserDTO userdto = new UserDTO();

			if(user.getDepartment()==null || user.getRegion()==null)
			{
				userdto.setUserId(user.getUserId());
				userdto.setUserFirstName(user.getUserFirstName());
 
				userdto.setUserLastName(user.getUserLastName());
 
				userdto.setUserEmailId(user.getUserEmailId());
 
				userdto.setUserType(user.getUserType());
				userdto.setUserMobileNumber(user.getUserMobileNumber());
				userList.add(userdto);

			}
		}
		return userList;


	}
 
public List<User> getDetails(String user) {		
	List<User>list = userRepo.findByuserFirstNameContaining(user);
	return list;
}    

}