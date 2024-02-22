package com.fdmgroup.budgetTracker.api.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.budgetTracker.model.BudgetCategory;
import com.fdmgroup.budgetTracker.model.Category;
import com.fdmgroup.budgetTracker.model.User;
import com.fdmgroup.budgetTracker.service.BudgetCategoryService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequestMapping("/category")
@AllArgsConstructor
public class BudgetCategoryController {

    private BudgetCategoryService budgetCategoryService;

    @PostMapping("/add")
    public ResponseEntity addCategory(@RequestBody BudgetCategory budgetCategory) {
        try {
            budgetCategoryService.addBudgetCategory(budgetCategory);
           return ResponseEntity.ok().build();
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
       }
   }
   @GetMapping("/")
    public ResponseEntity<List<BudgetCategory>> getAllBudgetCategories(@AuthenticationPrincipal User user) {
        try {
           return ResponseEntity.ok().body(budgetCategoryService.getAllBudgetCategories(user));
       } catch (Exception e) {
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
       }
        
   }
    
   
    
}