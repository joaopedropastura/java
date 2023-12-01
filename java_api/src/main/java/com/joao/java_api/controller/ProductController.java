package com.joao.java_api.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.joao.java_api.model.ProductModel;
import com.joao.java_api.repository.ProductRepository;
import com.joao.java_api.service.AuthService;
import com.joao.java_api.service.ProductService;
import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSBuckets;
import com.mongodb.client.gridfs.model.GridFSFile;
import com.mongodb.client.gridfs.model.GridFSUploadOptions;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private AuthService authService;

    @Autowired
    private ProductService productService;

    @Autowired
    private MongoTemplate mongoTemplate;

    // @PostMapping("/upload")
    // public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
    //     try {
    //         // Prepare GridFSBucket
    //         GridFSBucket gridFSBucket = GridFSBuckets.create(mongoTemplate.getDb());

    //         // Prepare InputStream
    //         InputStream inputStream = file.getInputStream();

    //         // Set custom options if needed (e.g., metadata)
    //         GridFSUploadOptions options = new GridFSUploadOptions()
    //                 .metadata("{ \"contentType\": \"" + file.getContentType() + "\" }");

    //         // Store the image in MongoDB using GridFS
    //         ObjectId fileId = gridFSBucket.uploadFromStream(file.getOriginalFilename(), inputStream, options);

    //         return ResponseEntity.ok(fileId.toString());
    //     } catch (IOException e) {
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload the image.");
    //     }
    // }

    @GetMapping("")
    public List<ProductModel> getAllProducts() {
        return (List<ProductModel>) productService.findAll();
    }

    @PostMapping("")
    public ProductModel newProduct(@RequestBody ProductModel product) {
        return this.productService.save(product);
    }
}
