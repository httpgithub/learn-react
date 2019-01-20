package com.example.demo.controller.vm;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * View Model object for storing a user's credentials.
 */
@Data
public class LoginVM {

    @NotNull
    @Size(min = 1, max = 50)
    private String email;

    @NotNull
    private String password;

    private Boolean rememberMe;


}
