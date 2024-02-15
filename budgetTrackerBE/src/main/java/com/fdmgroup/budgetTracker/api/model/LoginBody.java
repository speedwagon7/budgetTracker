package com.fdmgroup.budgetTracker.api.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class LoginBody {

    @Email
    @NotNull
    private String email;

    @NotNull
    private String password;

}
