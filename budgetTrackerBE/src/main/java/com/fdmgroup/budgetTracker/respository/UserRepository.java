package com.fdmgroup.budgetTracker.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.budgetTracker.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
