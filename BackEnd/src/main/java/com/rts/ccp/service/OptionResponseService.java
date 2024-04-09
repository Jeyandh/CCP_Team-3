package com.rts.ccp.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rts.ccp.bean.Option;
import com.rts.ccp.bean.Poll;
import com.rts.ccp.bean.User;
import com.rts.ccp.bean.OptionResponse;
import com.rts.ccp.repository.OptionRepo;
import com.rts.ccp.repository.PollRepo;
import com.rts.ccp.repository.UserRepo;

import jakarta.transaction.Transactional;

import com.rts.ccp.repository.OptionResponseRepo;

@Service
public class OptionResponseService {

	@Autowired
	private OptionResponseRepo optionResponseRepo;

	@Autowired
	private OptionRepo optionRepository;

	@Autowired
	private PollRepo pollRepository;

	@Autowired
	private User user;

	@Autowired
	private UserRepo userRepo;

	public OptionResponse createVote(int pollId, int optionId, int userId) {

		OptionResponse optionResponse = new OptionResponse();
		optionResponse.setOptionId(optionId);
		optionResponse.setPollId(pollId);

		optionResponse.setUserId(userId);
		return optionResponseRepo.save(optionResponse);

	}

//    public OptionResponse getVoteById(Long voteId) {
//        return optionResponseRepo.findById(voteId).orElse(null);
//    }
	
	@Transactional
	public boolean updateReponseById( long optionId,long id) {
		optionResponseRepo.updatebyId(optionId,id);
		return true;
	}
}