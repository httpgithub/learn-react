package com.example.demo.controller.vm;

import lombok.Data;

/**
 * <p/>Project Name:react_project1_server  
 * <p/>cretate user:mayxys  
 * <p/>Date:2019/1/16 15:15  
 * <p/>Copyright (c) 2019, All Rights Reserved.
 */
@Data
public class UserResultDto {
	private String username;

	private String password;

	private String returnCode;

	private String returnMessage;
}
