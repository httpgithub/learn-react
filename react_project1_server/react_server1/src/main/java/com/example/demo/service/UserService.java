package com.example.demo.service;

import com.example.demo.dao.model.User;
import com.example.demo.controller.vm.LoginVM;
import com.example.demo.controller.vm.SignupUserParamDto;
import com.example.demo.controller.vm.SignupUserResultDto;

public interface UserService {
    User login(LoginVM loginVM) throws Exception;

    SignupUserResultDto signup(SignupUserParamDto SignupUserParamDto);

    User getUserByemail(String email);
}
