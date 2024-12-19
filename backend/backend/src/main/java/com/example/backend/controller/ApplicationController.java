package com.example.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
@RestController
@RequestMapping("rest/auth")
// @CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "https://mind-whisperer.vercel.app") // Allow requests from your frontend
public class ApplicationController {
    @Autowired
    private UserService userService;
    @GetMapping("/welcome")
    public String welcome(){
        return "Hey!";
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        if (userService.validate(user.getUsername(), user.getPassword())) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials!");
        }
    }
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        if (userService.signUp(user)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
        }
    }
}
