package com.rts.ccp.bean;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_invitation")
public class Invitation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invitation_id")
    private Long invitationId;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private User sender;

    @Column(name = "recipient_email")
    private String recipientEmail;

    @Column(name = "invitation_code")
    private String invitationCode;

    @Column(name = "sent_time")
    private Timestamp sentTime;

    @Column(name = "accepted")
    private boolean accepted;

    @Column(name = "accepted_time")
    private Timestamp acceptedTime;

	public Invitation() {
		super();
	}

	public Invitation(Long invitationId, User sender, String recipientEmail, String invitationCode, Timestamp sentTime,
			boolean accepted, Timestamp acceptedTime) {
		super();
		this.invitationId = invitationId;
		this.sender = sender;
		this.recipientEmail = recipientEmail;
		this.invitationCode = invitationCode;
		this.sentTime = sentTime;
		this.accepted = accepted;
		this.acceptedTime = acceptedTime;
	}

	public Long getInvitationId() {
		return invitationId;
	}

	public void setInvitationId(Long invitationId) {
		this.invitationId = invitationId;
	}

	public User getSender() {
		return sender;
	}

	public void setSender(User sender) {
		this.sender = sender;
	}

	public String getRecipientEmail() {
		return recipientEmail;
	}

	public void setRecipientEmail(String recipientEmail) {
		this.recipientEmail = recipientEmail;
	}

	public String getInvitationCode() {
		return invitationCode;
	}

	public void setInvitationCode(String invitationCode) {
		this.invitationCode = invitationCode;
	}

	public Timestamp getSentTime() {
		return sentTime;
	}

	public void setSentTime(Timestamp sentTime) {
		this.sentTime = sentTime;
	}

	public boolean isAccepted() {
		return accepted;
	}

	public void setAccepted(boolean accepted) {
		this.accepted = accepted;
	}

	public Timestamp getAcceptedTime() {
		return acceptedTime;
	}

	public void setAcceptedTime(Timestamp acceptedTime) {
		this.acceptedTime = acceptedTime;
	}

}