package com.example.demo.controller.vm;

import lombok.Data;

@Data
public class SignupUserParamDto {
    private String email;

    private String userName;

    private String password;



    private String returnCode;

    private String returnMessage;
}
