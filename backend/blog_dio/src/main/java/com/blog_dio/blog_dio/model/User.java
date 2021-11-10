package com.blog_dio.blog_dio.model;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class User extends UserId{
    
    @NotBlank
    private String name;

    @NotBlank
    private String message;
}
