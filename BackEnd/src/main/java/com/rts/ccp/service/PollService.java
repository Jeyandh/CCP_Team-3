package com.rts.ccp.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rts.ccp.bean.Department;
import com.rts.ccp.bean.Poll;
import com.rts.ccp.dto.PollDTO;
import com.rts.ccp.bean.Project;
import com.rts.ccp.bean.Region;
import com.rts.ccp.bean.User;
import com.rts.ccp.repository.DepartmentRepo;
import com.rts.ccp.repository.PollRepo;
import com.rts.ccp.repository.ProjectRepo;
import com.rts.ccp.repository.RegionRepo;
import com.rts.ccp.repository.UserRepo;

@Service
public class PollService {

	@Autowired
	RegionRepo rgRepo;
 
	@Autowired
	DepartmentRepo dtRepo;
 
	@Autowired
	ProjectRepo ptRepo;
 
	@Autowired
	Region region;
 
	@Autowired
	Department department;
 
	@Autowired
	Project project;
	
	@Autowired
	PollRepo pollRepo;
	
	@Autowired
	User user;
	
	@Autowired
	UserRepo userRepo;

//	public boolean insertPoll(Poll poll) {
//		pollRepo.save(poll);
//		return true;
//	}

	public boolean updatePoll(Poll poll) {
		pollRepo.save(poll);
		return true;
	}

	public boolean insertPoll(PollDTO pollDto) {
		 
		Poll poll = new Poll();
		poll.setPollQuestion(pollDto.getPollQuestion());
		poll.setOptions(pollDto.getOptions());
		poll.setTimeStamp(pollDto.getTimeStamp());
		poll.setEndDate(pollDto.getEndDate());
 
		poll.setStatus(pollDto.isStatus());
		
		region = rgRepo.findById(pollDto.getRegion()).get();
		poll.setRegion(region);
 
		department = dtRepo.findById(pollDto.getDepartment()).get();
		poll.setDepartment(department);
 
		project = ptRepo.findById(pollDto.getProject()).get();
		poll.setProject(project);

		user = userRepo.findById(pollDto.getUser()).get();
		poll.setUser(user);
		
		pollRepo.save(poll);
		return true;
	}
	
	public boolean deletePoll(long pollId) {
		pollRepo.deleteById(pollId);
		return true;
	}

	public List<Poll> getAllPollDetails() {
		Iterator<Poll> it = pollRepo.findAll().iterator();
		ArrayList<Poll> list = new ArrayList<>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

	public List<Poll> pollDetails(long pollId) {
		Iterator<Poll> it = pollRepo.findByPollId(pollId).iterator();
		ArrayList<Poll> list = new ArrayList<>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	
	public List<Poll> getPublishedPoll() {
	    Iterable<Poll> allPoll = pollRepo.findAll();
	    return StreamSupport.stream(allPoll.spliterator(), false) // Create stream from Iterable
	        .filter(poll -> poll.isStatus())
	        .sorted(Comparator.comparing(Poll::getPollId).reversed())
	        .collect(Collectors.toList());
	}
	 
	public List<Poll> getDraftPoll() {
	    Iterable<Poll> allPoll = pollRepo.findAll();
	    return StreamSupport.stream(allPoll.spliterator(), false) // Create stream from Iterable
	        .filter(poll -> !poll.isStatus())
	        .sorted(Comparator.comparing(Poll::getPollId).reversed())
	        .collect(Collectors.toList());
	}
}
