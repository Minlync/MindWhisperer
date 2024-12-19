package com.example.backend.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="`user`")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false,unique=true)
    private String username;

    @Column(nullable=false)
    private String password;

    public User(){}
    public User(String username,String password){
        this.username=username;
        this.password=password;
    }

    public Long getId(){
        return id;
    }

    public String getUsername() {

        return this.username;
    }

    public String getPassword() {

        return this.password;
    }

    public void setId(Long id){
        this.id=id;
    }

    public void setUsername(String username) {
        this.username=username;
    }

    public void setPassword(String encode) {
        this.password=encode;
    }
}
