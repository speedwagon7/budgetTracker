package com.fdmgroup.budgetTracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "users")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Long id;
	@Column(unique = true)
	private String email;
	private String password;
	@Column
	@OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST, fetch=FetchType.EAGER, orphanRemoval = true)
	@JsonManagedReference
	private List<BudgetCategory> budgetCategoryList;

	public User(List<BudgetCategory> premadeBudgetCategoryList){
		this.budgetCategoryList = premadeBudgetCategoryList;
	}


}
