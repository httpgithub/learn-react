package com.example.demo.controller;

import javax.validation.Valid;

import com.example.demo.controller.vm.LoginVM;
import com.example.demo.controller.vm.UserResultDto;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Slf4j
public class UserController {

	@RequestMapping("/auth")
	public ResponseEntity<UserResultDto> auth(@RequestBody @Valid LoginVM loginVM) {
		log.info("loginVM:{}", loginVM.getUsername());
		UserResultDto userResultDto = new UserResultDto();
		if("1".equals(loginVM.getUsername()) && "1".equals(loginVM.getPassword())){
			userResultDto.setReturnCode("000000");
			userResultDto.setReturnMessage("登陆成功");
			userResultDto.setJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
		}else{
			userResultDto.setReturnCode("111111");
			userResultDto.setReturnMessage("用户名或密码错误");
		}
		BeanUtils.copyProperties(loginVM, userResultDto);
		ResponseEntity<UserResultDto> userResultDtoResponseEntity = new ResponseEntity<>(userResultDto, HttpStatus.OK);

		return userResultDtoResponseEntity;
	}

}
