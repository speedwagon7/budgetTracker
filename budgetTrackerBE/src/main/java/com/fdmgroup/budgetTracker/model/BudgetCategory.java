package com.fdmgroup.budgetTracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name = "budget_categories")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BudgetCategory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Long id;
	@Column
	private double budget;
	@Column
	private double actual;
	@OneToMany(mappedBy = "budgetCategory", cascade = CascadeType.ALL, fetch=FetchType.EAGER, orphanRemoval = true)
	@JsonManagedReference
	private List<Expense> expenses;
	@ManyToOne
    @JoinColumn(name="user_id", nullable=false)
	@JsonBackReference
	private User user;
	@ManyToOne(optional = false)
	private Category category;

	public BudgetCategory(User user, Category category){
		this.budget = 0;
		this.actual = 0;
		this.category = category;
		this.user = user;
	}

}

