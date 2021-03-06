package com.example.demo.dao.mapper;

import com.example.demo.dao.model.Book;
import com.example.demo.dao.model.BookExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BookMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table book
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    long countByExample(BookExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table book
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    int deleteByExample(BookExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table book
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    int insert(Book record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table book
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    int insertSelective(Book record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table book
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    List<Book> selectByExample(BookExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table book
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    int updateByExampleSelective(@Param("record") Book record, @Param("example") BookExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table book
     *
     * @mbg.generated Sat Jan 26 12:44:25 CST 2019
     */
    int updateByExample(@Param("record") Book record, @Param("example") BookExample example);
}