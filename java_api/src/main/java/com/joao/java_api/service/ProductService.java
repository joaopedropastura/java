package com.joao.java_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joao.java_api.repository.ProductRepository;

@Service
public class ProductService {
    

    @Autowired
    private ProductRepository productRepository;

    

}
