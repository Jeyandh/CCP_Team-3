package com.rts.ccp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rts.ccp.bean.Invitation;
import com.rts.ccp.service.InvitationService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200/")
public class InvitationController {

    @Autowired 
    private InvitationService invitationService;

    @PostMapping("/insertInvitations")
    public void performInsert(@RequestBody Invitation invitation) {
        invitationService.saveOrUpdateInvitation(invitation);
    }

    @PutMapping("/updateInvitations")
    public void performUpdate(@RequestBody Invitation invitation) {
        invitationService.saveOrUpdateInvitation(invitation);
    }

    @DeleteMapping("/deleteInvitations/{invitationId}")
    public void performDelete(@PathVariable Long invitationId) {
        invitationService.deleteInvitationById(invitationId);
    }

    @GetMapping("/findAllInvitations")
    public List<Invitation> viewAllInvitations() {
        return invitationService.getAllInvitations();
    }
}