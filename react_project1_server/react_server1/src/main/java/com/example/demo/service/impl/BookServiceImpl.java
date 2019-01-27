package com.example.demo.service.impl;

import com.example.demo.dao.mapper.BookMapper;
import com.example.demo.dao.mapper.UserMapper;
import com.example.demo.dao.model.Book;
import com.example.demo.dao.model.BookExample;
import com.example.demo.dao.model.User;
import com.example.demo.dao.model.UserExample;
import com.example.demo.service.BookService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookMapper bookMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserService userService;

    @Override
    public List<Book> getBooksByEmail(String email) {
        UserExample userExample = new UserExample();
        userExample.createCriteria().andEmailEqualTo(email);
        List<User> userList = userMapper.selectByExample(userExample);
        BookExample bookExample = new BookExample();
        bookExample.createCriteria().andUserIdEqualTo(userList.get(0).getId() + "");
        return bookMapper.selectByExample(bookExample);
    }

    @Override
    public void saveBook(String email, Book book) {
        User user = userService.getUserByemail(email);
        book.setUserId(user.getId() + "");
        bookMapper.insertSelective(book);
    }
}
