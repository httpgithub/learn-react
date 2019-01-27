package com.example.demo.service.impl;

import com.example.demo.dao.mapper.UserMapper;
import com.example.demo.dao.model.User;
import com.example.demo.dao.model.UserExample;
import com.example.demo.service.UserService;
import com.example.demo.controller.vm.LoginVM;
import com.example.demo.controller.vm.SignupUserParamDto;
import com.example.demo.controller.vm.SignupUserResultDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public User login(LoginVM loginVM) throws Exception {
        UserExample userExample = new UserExample();
        userExample.createCriteria().andEmailEqualTo(loginVM.getEmail()).andPasswordEqualTo(loginVM.getPassword());
        List<User> userList = userMapper.selectByExample(userExample);
        if(null == userList && userList.isEmpty()){
            throw new Exception("邮箱或密码错误");
        }
        return userList.get(0);
    }

    @Transactional(rollbackFor = {java.lang.Exception.class})
    @Override
    public SignupUserResultDto signup(SignupUserParamDto signupUserParamDto) {
        SignupUserResultDto signupUserResultDto = new SignupUserResultDto();
        UserExample userExample = new UserExample();
        userExample.createCriteria().andEmailEqualTo(signupUserParamDto.getEmail());
        List<User> userList = userMapper.selectByExample(userExample);
        if (null != userList && !userList.isEmpty()) {
            signupUserResultDto.setReturnCode("111111");
            signupUserResultDto.setReturnMessage("邮箱已存在");
            return signupUserResultDto;
        } else {
            User record = new User();
            BeanUtils.copyProperties(signupUserParamDto, record);
            userMapper.insertSelective(record);
            signupUserResultDto.setReturnCode("000000");
            signupUserResultDto.setReturnMessage("成功");
            return signupUserResultDto;
        }
    }

    @Override
    public User getUserByemail(String email){
        UserExample userExample = new UserExample();
        userExample.createCriteria().andEmailEqualTo(email);
        return userMapper.selectByExample(userExample).get(0);
    }
}
