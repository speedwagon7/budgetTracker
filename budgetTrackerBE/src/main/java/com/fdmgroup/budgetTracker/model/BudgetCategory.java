package com.fdmgroup.budgetTracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;


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
	private String categoryName;
	@Column
	private int budget;
	@Column
	private int actual;
	@OneToMany(mappedBy = "budgetCategory")
	private List<Expense> expenses;
	@ManyToOne
    @JoinColumn(name="user_id", nullable=false)
	private User user;
	@ManyToOne(optional = false)
	private Category category;

}

