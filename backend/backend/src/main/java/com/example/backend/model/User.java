package com.example.backend.model;
import jakarta.persistence.*;

@Entity
@Table(name="`user`")
public class User {
    @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;
    private String password;
    public User(){}
    public User(String username,String password){
        this.username=username;
        this.password=password;
    }

    public String getUsername() {

        return this.username;
    }

    public String getPassword() {

        return this.password;
    }

    public void setUsername(String username) {
        this.username=username;
    }

    public void setPassword(String encode) {
        this.password=encode;
    }
}
