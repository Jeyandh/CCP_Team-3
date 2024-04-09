package com.rts.ccp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rts.ccp.bean.Login;

@Repository
public interface LoginRepo extends JpaRepository<Login, String> {
	Login findByUserEmailIdAndPassword(String userEmailId, String password);
    Login findByUserEmailId(String userEmailId);
}