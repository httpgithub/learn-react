package com.example.demo.controller.vm;

import lombok.Data;

@Data
public class SignupUserResultDto {
    private String returnCode;
    private String returnMessage;
    private boolean confirmed;
    private String jwt;
    private String confirmationToken;

}
