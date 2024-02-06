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

	public User saveUser(User user)
	{
		return userRepo.save(user);
	}

	public void deleteUser(User user) {
		userRepo.delete(user);
	}

	public User registerUser(RegistrationBody registrationBody) throws UserAlreadyExistsException {
		User user = new User();
		user.setEmail(registrationBody.getEmail());
		user.setPassword(registrationBody.getPassword());
		return userRepo.save(user);
	}

	public String loginUser(LoginBody loginBody) {
		Optional<User> opUser = userRepo.findByEmail(loginBody.getEmail());
		if (opUser.isPresent()) {
			User user = opUser.get();
			//TODO EncryptionService
			if (user.getPassword() == loginBody.getPassword()) {
				return jwtService.generateJWT(user);
			}
		}
	}

}
