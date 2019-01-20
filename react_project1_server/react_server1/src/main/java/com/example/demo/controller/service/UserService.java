package com.example.demo.controller.service;

import com.example.demo.controller.dao.model.User;
import com.example.demo.controller.vm.LoginVM;
import com.example.demo.controller.vm.SignupUserParamDto;
import com.example.demo.controller.vm.SignupUserResultDto;

public interface UserService {
    User login(LoginVM loginVM) throws Exception;

    SignupUserResultDto signup(SignupUserParamDto SignupUserParamDto);
}
