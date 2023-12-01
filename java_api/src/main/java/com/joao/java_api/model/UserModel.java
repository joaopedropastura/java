package com.joao.java_api.model;

import java.util.Collection;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@AllArgsConstructor
@Document("user")
public class UserModel implements UserDetails {

    @Id
    private String id;
    private short age;
    private String name;
    private String email;
    private Adress adress;
    private String userName;
    private String password;
    private String userType;
    private String phoneNumber;



    @Data
    public class Adress{
        private String City;
        private String number;
        private String street;
        private String postalCode;
    }


    public UserModel(){}
    
    public UserModel(String name, short age, String email, String pass, String phone, String userName)
    {
        this.age = age;
        this.name = name;
        this.email = email;
        this.password = pass;
        this.userName = userName;
        this.phoneNumber = phone;
    }

    public UserModel(String password, String email) {
        this.password = password;
        this.email = email;
    }

     @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
