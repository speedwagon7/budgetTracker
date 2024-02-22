package com.fdmgroup.budgetTracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "expenses")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Expense {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private long id;
	@ManyToOne
    @JoinColumn(name="category_id", nullable=false)
	private BudgetCategory budgetCategory;
    @Column
	private String title;
    @Column
    private double price;
    @Column
    private LocalDate date;
	
}
