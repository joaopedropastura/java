package com.joao.java_api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.joao.java_api.model.ProductModel;

public interface ProductRepository extends MongoRepository<ProductModel, String>{
    @Query("{'name': ?0}")
    List<ProductModel> findByName(String name);

}
