package com.joao.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Data
@AllArgsConstructor
@Document("user")
public class UserModel {

    @Id
    private String id;
    private String name;
    private short age;
    private String email;
    private String password;
    private String phoneNumber;
    private Adress adress;
    private byte userType;


    @Data
    public class Adress{
        private String City;
        private String number;
        private String street;
        private String postalCode;
    }


    public UserModel(){}
    


}
