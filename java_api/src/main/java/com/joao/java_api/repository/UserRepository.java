package com.joao.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.joao.java_api.model.UserModel;
import java.util.List;


public interface UserRepository extends MongoRepository<UserModel, String>{

    @Query("{name: ?1, 'age': ?0}")
    List<UserModel> findByAgeAndName(short age, String name);

    @Query("{'name': ?0}")
    List<UserModel> findByName(String name);
}
