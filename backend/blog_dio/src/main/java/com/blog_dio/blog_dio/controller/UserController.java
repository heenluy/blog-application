package com.blog_dio.blog_dio.controller;

import java.util.List;

import javax.validation.Valid;

import com.blog_dio.blog_dio.model.User;
import com.blog_dio.blog_dio.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/artigos")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> listAll() {
        return userService.getFromDatabase();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@Valid @PathVariable Long id) {
        return userService.getByIdFromDatabase(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User create(@Valid @RequestBody User user) {
        return userService.createInDatabase(user);
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> update(@Valid @PathVariable Long id, @RequestBody User user) {
        return userService.UpdateInDatabase(id, user);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@Valid @PathVariable Long id) {
        return userService.deleteInDatabase(id);
    }

    @GetMapping("/pesquisar-por-nome/{name}")
    public ResponseEntity<?> getByNameContaining(@PathVariable String name) {
        return userService.getByNameContainingInDatabase(name);
    }
}
