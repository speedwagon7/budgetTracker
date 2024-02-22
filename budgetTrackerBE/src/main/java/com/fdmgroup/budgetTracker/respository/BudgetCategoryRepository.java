package com.fdmgroup.budgetTracker.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.budgetTracker.model.BudgetCategory;


public interface BudgetCategoryRepository extends JpaRepository<BudgetCategory, Long> {
    
}
