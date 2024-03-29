package com.fdmgroup.budgetTracker.service;

import com.fdmgroup.budgetTracker.api.model.LoginBody;
import com.fdmgroup.budgetTracker.api.model.RegistrationBody;
import com.fdmgroup.budgetTracker.model.BudgetCategory;
import com.fdmgroup.budgetTracker.model.Expense;
import com.fdmgroup.budgetTracker.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdmgroup.budgetTracker.respository.BudgetCategoryRepository;

@Service
public class BudgetCategoryService {
	
	@Autowired
	private BudgetCategoryRepository budgetcategoryRepo;

	
	public BudgetCategory addBudgetCategory(BudgetCategory budgetcategory) {
		
		return budgetcategoryRepo.save(budgetcategory);
	}
	public List<BudgetCategory> getAllBudgetCategories(User user){
		return user.getBudgetCategoryList();
	}

	public BudgetCategory updateBudgetCategory(BudgetCategory budgetcategory, Expense expense) {
		Optional<BudgetCategory> existingBudgetCategoryOptional = budgetcategoryRepo.findById(expense.getBudgetCategory().getId());
		BudgetCategory existingBudgetCategory = existingBudgetCategoryOptional.get();
		existingBudgetCategory.setActual(existingBudgetCategory.getActual() + expense.getPrice());
		return budgetcategoryRepo.save(existingBudgetCategory);
	}




}
