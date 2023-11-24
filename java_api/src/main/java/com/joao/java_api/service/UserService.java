package com.joao.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joao.java_api.model.UserModel;
import com.joao.java_api.repository.UserRepository;




@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel){
        return this.userRepository.save(userModel);
    }

    public List<UserModel> findAll(){
        return (List<UserModel>)this.userRepository.findAll();
    }

    public UserModel findById(String id){
        return (UserModel) this.userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public List<UserModel> findByName(String name){
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public UserModel delete(String id){
        UserModel user = findById(id);

        this.userRepository.deleteById(id);

        return user;
    }

    public UserModel findByEmail(String email) {
        return (UserModel) this.userRepository.findByEmail(email);
    }



}
