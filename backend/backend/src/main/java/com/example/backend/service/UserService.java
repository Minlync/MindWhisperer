package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    public void initUsers() {
        userRepository.save(new User("u1", "p1"));
        userRepository.save(new User("u2", "p2"));
    }

    public boolean validate(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }


}

