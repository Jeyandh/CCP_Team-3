package com.rts.ccp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rts.ccp.bean.Invitation;

@Repository
public interface InvitationRepo extends JpaRepository<Invitation, Long> {
}