package com.fdmgroup.budgetTracker.service;

import com.fdmgroup.budgetTracker.api.model.LoginBody;
import com.fdmgroup.budgetTracker.api.model.RegistrationBody;
import com.fdmgroup.budgetTracker.exception.UserAlreadyExistsException;
import com.fdmgroup.budgetTracker.model.BudgetCategory;
import com.fdmgroup.budgetTracker.model.Category;
import com.fdmgroup.budgetTracker.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdmgroup.budgetTracker.respository.BudgetCategoryRepository;
import com.fdmgroup.budgetTracker.respository.CategoryRepository;
import com.fdmgroup.budgetTracker.respository.UserRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private BudgetCategoryRepository budgetCategoryRepo;
	@Autowired
	private CategoryRepository categoryRepo;
	@Autowired
	private JWTService jwtService;
	@Autowired
	private EncryptionService encryptionService;

	public User registerUser(RegistrationBody registrationBody) throws UserAlreadyExistsException {
		if (userRepo.findByEmail(registrationBody.getEmail()).isPresent()) {
			throw new UserAlreadyExistsException();
		}
		List<Category> categoryList = categoryRepo.findAll();
		
		User user = new User();
		user.setEmail(registrationBody.getEmail());
		user.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));
		user = userRepo.save(user);

		for(Category category : categoryList){
			budgetCategoryRepo.save(new BudgetCategory(user, category));
		}
		return user;
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
