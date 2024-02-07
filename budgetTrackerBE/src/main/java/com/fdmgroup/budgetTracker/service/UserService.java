package com.fdmgroup.budgetTracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdmgroup.budgetTracker.respository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	

}
