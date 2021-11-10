package com.blog_dio.blog_dio.service;

import java.util.List;

import com.blog_dio.blog_dio.model.User;
import com.blog_dio.blog_dio.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.Getter;

@Service
@Getter
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public List<User> getFromDatabase() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> getByIdFromDatabase(Long id) {
        return userRepository.findById(id)
        .map(mapper -> ResponseEntity.ok(mapper))
        .orElse(ResponseEntity.notFound().build());
    }

    public User createInDatabase(User user) {
        return userRepository.save(user);
    }

    public ResponseEntity<User> UpdateInDatabase(Long id, User user) {
        
        if(!userRepository.existsById(id)) {
            ResponseEntity.notFound().build();
        }

        user.setId(id);
        user = userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    public ResponseEntity<Void> deleteInDatabase(Long id) {
        
        if(!userRepository.existsById(id)) {
            ResponseEntity.notFound().build();
        }

        userRepository.deleteById(id);
        
        return ResponseEntity.noContent().build();
    }

    
    public ResponseEntity<?> getByNameContainingInDatabase(String name) {
        return new ResponseEntity<>(userRepository.findByNameContainingIgnoreCase(name), HttpStatus.OK);
    }

}
