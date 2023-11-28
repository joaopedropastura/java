package com.joao.java_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joao.java_api.model.UserModel;
import com.joao.java_api.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<UserModel> getAllUser(){
       return (List<UserModel>) userService.findAll();
    }

    @GetMapping("/name/{name}")
    public List<UserModel> getByName(@PathVariable String name){
        return userService.findByName(name);
    }

    @GetMapping("/id/{id}")
    public UserModel findById(@PathVariable String id){
        return userService.findById(id);
    }

    @PostMapping("")
    public UserModel newUser(@RequestBody UserModel user){
        return userService.save(user);
    }    

    @PostMapping("/login")
    public UserModel loginUser(@RequestBody String email){
        return userService.findByEmail(email);
    }    

    @PutMapping("/{id}")
    public void putUser(@RequestBody UserModel newUser, @PathVariable String id) {
        // userService.save((String) id, (String) newUser.getName(), (short) newUser.getAge());
    }


}
