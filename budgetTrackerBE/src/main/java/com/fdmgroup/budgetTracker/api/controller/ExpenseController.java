package com.fdmgroup.budgetTracker.api.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.budgetTracker.model.BudgetCategory;
import com.fdmgroup.budgetTracker.model.Expense;
import com.fdmgroup.budgetTracker.model.User;
import com.fdmgroup.budgetTracker.service.BudgetCategoryService;
import com.fdmgroup.budgetTracker.service.ExpenseService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/expense")
@AllArgsConstructor
public class ExpenseController {

    private ExpenseService expenseService;
    private BudgetCategoryService budgetCategoryService;

    @PostMapping("/add")
    public ResponseEntity<String> addExpense(@RequestBody Expense expense) {
         try {
            expenseService.addExpense(expense);
            budgetCategoryService.updateBudgetCategory(expense.getBudgetCategory(), expense);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    
}
