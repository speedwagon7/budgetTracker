package com.fdmgroup.budgetTracker.service;

import com.fdmgroup.budgetTracker.api.model.LoginBody;
import com.fdmgroup.budgetTracker.api.model.RegistrationBody;
import com.fdmgroup.budgetTracker.exception.UserAlreadyExistsException;
import com.fdmgroup.budgetTracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdmgroup.budgetTracker.respository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private JWTService jwtService;
	@Autowired
	private EncryptionService encryptionService;

	public User registerUser(RegistrationBody registrationBody) throws UserAlreadyExistsException {
		if (userRepo.findByEmail(registrationBody.getEmail()).isPresent()) {
			throw new UserAlreadyExistsException();
		}
		User user = new User();
		user.setEmail(registrationBody.getEmail());
		user.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));
		return userRepo.save(user);
	}

	public String loginUser(LoginBody loginBody) {
		Optional<User> opUser = userRepo.findByEmail(loginBody.getEmail());
		if (opUser.isPresent()) {
			User user = opUser.get();
			if (encryptionService.verifyPassword(loginBody.getPassword(),user.getPassword())) {
				return jwtService.generateJWT(user);
			}
		}
		return null;
	}

}
