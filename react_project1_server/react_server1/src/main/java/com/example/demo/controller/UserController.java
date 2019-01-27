package com.example.demo.controller;

import com.alibaba.fastjson.JSON;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.example.demo.controller.vm.LoginVM;
import com.example.demo.controller.vm.SignupUserParamDto;
import com.example.demo.controller.vm.SignupUserResultDto;
import com.example.demo.controller.vm.UserResultDto;
import com.example.demo.dao.model.User;
import com.example.demo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/auth")
    public ResponseEntity<UserResultDto> auth(@RequestBody @Valid LoginVM loginVM) {

        log.info("loginVM:{}", loginVM.getEmail());
        UserResultDto userResultDto = new UserResultDto();
        try {
            userResultDto.setReturnCode("000000");
            userResultDto.setReturnMessage("登陆成功");
            userResultDto.setJwt(getJwtToken(loginVM.getEmail(),true));
            userResultDto.setConfirmed(true);
            User user = userService.login(loginVM);
        } catch (Exception e) {
            e.printStackTrace();
            userResultDto.setReturnCode("111111");
            userResultDto.setReturnMessage("用户名或密码错误");
        }
        BeanUtils.copyProperties(loginVM, userResultDto);
        ResponseEntity<UserResultDto> userResultDtoResponseEntity = new ResponseEntity<>(userResultDto, HttpStatus.OK);

        return userResultDtoResponseEntity;
    }

    @RequestMapping("/signup")
    public SignupUserResultDto signup(@RequestBody SignupUserParamDto signupUserParamDto) {
        SignupUserResultDto signupUserResultDto = userService.signup(signupUserParamDto);
        signupUserResultDto.setConfirmationToken(getJwtToken(signupUserParamDto.getEmail(), false));
        signupUserResultDto.setConfirmed(false);
        signupUserResultDto.setJwt(getJwtToken(signupUserParamDto.getEmail(), false));
        sendEmail(signupUserResultDto);
        return signupUserResultDto;
    }

    @RequestMapping("/users/currentUser")
    public User currentUser(@RequestHeader("authorization") String authorization) {
        DecodedJWT jwt = UserController.decode(authorization.split(" ")[1]);
        String email = JSON.parseObject(jwt.getSubject()).get("email")+"";
       return userService.getUserByemail(email);
    }

    @RequestMapping("/confirm")
    public SignupUserResultDto confirm(@RequestBody String confirmationToken) {
        SignupUserResultDto signupUserResultDto = new SignupUserResultDto();
        DecodedJWT jwt = decode(JSON.parseObject(confirmationToken).getString("confirmationToken"));
        signupUserResultDto.setConfirmed(true);
        signupUserResultDto.setJwt(getJwtToken(JSON.parseObject(jwt.getSubject()).get("email")+"",true));
        return signupUserResultDto;
    }

    public static String getJwtToken(String email, boolean confirmed) {
        Map<String, Object> h = new HashMap<>();
        h.put("confirmed", confirmed);
        h.put("email", email);
        Algorithm algorithm = Algorithm.HMAC256("secret");
        String token = JWT.create()
                .withIssuer("auth0")
                .withSubject(JSON.toJSONString(h))
                .sign(algorithm);
        return token;
    }

    public static void verify(String token) {
        Algorithm algorithm = Algorithm.HMAC256("secret");
        JWTVerifier verifier = JWT.require(algorithm)
                .withIssuer("auth0")
                .build(); //Reusable verifier instance

    }

    public static DecodedJWT decode(String token) {
        DecodedJWT jwt = JWT.decode(token);
        return jwt;
    }

    @Async
    public void sendEmail(SignupUserResultDto signupUserResultDto) {
        log.info("邮箱确认地址:http://localhost:8080/confirmation/{}", signupUserResultDto.getConfirmationToken());
    }

    /*public static void main(String[] args) {
        Algorithm algorithm = Algorithm.HMAC256("secret");
        Map<String,String> h = new HashMap<>();
        h.put("confirmed","1");
        String token = JWT.create()
                .withIssuer("auth0")
                .withSubject(JSON.toJSONString(h))
                .sign(algorithm);
        System.out.println(token);
        DecodedJWT jwt = JWT.decode(token);
        System.out.println(jwt.getSubject());
    }*/

}
