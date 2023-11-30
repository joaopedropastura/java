package com.joao.java_api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joao.java_api.model.ProductModel;
import com.joao.java_api.repository.ProductRepository;

@Service
public class ProductService {
    

    @Autowired
    private ProductRepository productRepository;

    public ProductModel save(ProductModel productModel) {
        return this.productRepository.save(productModel);
    }
    
    public List<ProductModel> findAll(){
        return (List<ProductModel>)this.productRepository.findAll();
    }

}
