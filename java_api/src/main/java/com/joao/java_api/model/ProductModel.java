package com.joao.java_api.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("product")
public class ProductModel {

    private String productOwner;
    private String title;
    private float price;
    private String description;
    private String size;


    public ProductModel() {}
}
