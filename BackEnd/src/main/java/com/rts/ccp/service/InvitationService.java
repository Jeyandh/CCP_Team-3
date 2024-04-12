package com.rts.ccp.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rts.ccp.bean.Invitation;
import com.rts.ccp.repository.InvitationRepo;

import java.util.List;

@Service
public class InvitationService {

    @Autowired
    private InvitationRepo invitationRepo;

    public boolean saveOrUpdateInvitation(Invitation invitation) {
        invitationRepo.save(invitation);
        return true;
    }

    public boolean deleteInvitationById(Long invitationId) {
        invitationRepo.deleteById(invitationId);
        return true;
    }

    public List<Invitation> getAllInvitations() {
        return invitationRepo.findAll();
    }
}