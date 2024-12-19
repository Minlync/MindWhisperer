package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;

import jakarta.annotation.PostConstruct;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void initUsers() {
        if (userRepository.findByUsername("u1") == null) {
            userRepository.save(new User("u1", "p1"));
        }
        if (userRepository.findByUsername("u2") == null) {
            userRepository.save(new User("u2", "p2"));
        }
    }

    public boolean validate(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }

    public boolean signUp(User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return false;
        }
        userRepository.save(user);
        return true;
    }


}

