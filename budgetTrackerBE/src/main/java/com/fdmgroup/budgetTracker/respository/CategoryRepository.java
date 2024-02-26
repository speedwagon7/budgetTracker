package com.fdmgroup.budgetTracker.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.budgetTracker.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    
}
