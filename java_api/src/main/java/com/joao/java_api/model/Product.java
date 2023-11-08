package com.joao.java_api.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("product")
public class Product {

    private String productOwner;
    private String name;
    private float price;
    private String Category;


    public Product() {}
}
