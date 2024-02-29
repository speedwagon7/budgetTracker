package com.fdmgroup.budgetTracker.dto;

import java.util.List;

import com.fdmgroup.budgetTracker.model.BudgetCategory;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BudgetCategoryDto {
    private List<BudgetCategory> budgetCategoryList;
}
