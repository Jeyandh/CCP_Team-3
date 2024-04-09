package com.rts.ccp.repository;
 
import java.util.List;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rts.ccp.bean.Department;
import com.rts.ccp.bean.Project;
 
@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {
	@Query(value="select * from tbl_project where department_id=?",nativeQuery=true)
	public List<Project> findByProjectId(long departmentId);

}