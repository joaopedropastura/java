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
import com.joao.java_api.service.AuthService;
import com.joao.java_api.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private AuthService authService;

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

    @PostMapping("/auth/{login}")
    public String loginUser(@RequestBody UserModel user){
        var res = this.userService.findByEmail(user.getEmail());
        if(res != null){
            if(res.getPassword().equals(user.getPassword()))
                return this.authService.createToken(user);
            return ("Senha ou email incorreta");
        }
        return ("parece que você ainda não é cadastrado");
    }    

    @PutMapping("/{id}")
    public void putUser(@RequestBody UserModel newUser, @PathVariable String id) {
        // userService.save((String) id, (String) newUser.getName(), (short) newUser.getAge());
    }
    
        


}
