package com.fdmgroup.budgetTracker.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.budgetTracker.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    
}
