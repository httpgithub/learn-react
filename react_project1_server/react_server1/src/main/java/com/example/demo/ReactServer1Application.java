package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AdviceMode;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication(scanBasePackages = "com.example.demo")
@EnableTransactionManagement(mode = AdviceMode.ASPECTJ)
@MapperScan("com.example.demo.controller.dao.mapper")
public class ReactServer1Application {

    public static void main(String[] args) {
        SpringApplication.run(ReactServer1Application.class, args);
    }

}

