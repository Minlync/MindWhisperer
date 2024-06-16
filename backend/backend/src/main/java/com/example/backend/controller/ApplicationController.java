package com.example.backend.controller;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/auth")
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
}
