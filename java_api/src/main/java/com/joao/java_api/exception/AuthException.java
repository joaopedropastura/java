package com.joao.java_api.exception;

public class AuthException extends RuntimeException{
    public AuthException(final String message){
        super(message);
    }
}
