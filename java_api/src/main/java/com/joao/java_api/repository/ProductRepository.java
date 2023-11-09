package com.joao.java_api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.joao.java_api.model.Product;

public interface ProductRepository extends MongoRepository<Product, String>{
    
}
