package com.joao.java_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joao.java_api.model.ProductModel;
import com.joao.java_api.repository.ProductRepository;
import com.joao.java_api.service.AuthService;
import com.joao.java_api.service.ProductService;

@RestController
@RequestMapping("/new-product")
public class ProductController {
    

    @Autowired
    private AuthService authService;

    @Autowired
    private ProductService productService;

    @GetMapping("")
    public List<ProductModel> getAllProducts(){
        return (List<ProductModel>) productService.findAll();
    }

    @PostMapping("")
    public ProductModel newProduct(@RequestBody ProductModel product) {
        return this.productService.save(product);
    }
}
