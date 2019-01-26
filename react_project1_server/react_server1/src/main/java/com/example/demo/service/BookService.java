package com.example.demo.service;

import com.example.demo.dao.model.Book;

import java.util.List;

public interface BookService {
    List<Book> getBooksByEmail(String email);
}
