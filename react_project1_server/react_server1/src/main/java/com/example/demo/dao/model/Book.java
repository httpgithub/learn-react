package com.example.demo.dao.model;

import java.util.Date;

public class Book {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column book.id
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column book.title
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    private String title;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column book.author
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    private String author;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column book.image_url
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    private String imageUrl;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column book.user_id
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    private String userId;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column book.create_date
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    private Date createDate;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column book.id
     *
     * @return the value of book.id
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column book.id
     *
     * @param id the value for book.id
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column book.title
     *
     * @return the value of book.title
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public String getTitle() {
        return title;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column book.title
     *
     * @param title the value for book.title
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column book.author
     *
     * @return the value of book.author
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public String getAuthor() {
        return author;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column book.author
     *
     * @param author the value for book.author
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column book.image_url
     *
     * @return the value of book.image_url
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public String getImageUrl() {
        return imageUrl;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column book.image_url
     *
     * @param imageUrl the value for book.image_url
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl == null ? null : imageUrl.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column book.user_id
     *
     * @return the value of book.user_id
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public String getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column book.user_id
     *
     * @param userId the value for book.user_id
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column book.create_date
     *
     * @return the value of book.create_date
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public Date getCreateDate() {
        return createDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column book.create_date
     *
     * @param createDate the value for book.create_date
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}