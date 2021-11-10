package com.blog_dio.blog_dio.repository;

import java.util.List;

import com.blog_dio.blog_dio.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    List<User> findByNameContainingIgnoreCase(String name);
}
