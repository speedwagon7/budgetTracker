package com.fdmgroup.budgetTracker.service;

import com.fdmgroup.budgetTracker.model.BudgetCategory;
import com.fdmgroup.budgetTracker.model.Expense;
import com.fdmgroup.budgetTracker.model.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fdmgroup.budgetTracker.respository.ExpenseRepository;


@Service
public class ExpenseService {
	
	@Autowired
	private ExpenseRepository expenseRepo;

	public Expense addExpense(Expense expense) {
		return expenseRepo.save(expense);
	}

	


}
