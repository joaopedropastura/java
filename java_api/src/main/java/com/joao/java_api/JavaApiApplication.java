package com.joao.java_api;

import java.util.Arrays;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JavaApiApplication {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		
		System.out.println("digite a lista separando-os por virgula: ");
		String input = scanner.nextLine();
		
		String[] listInput = input.split(",");
		Float[] list = Arrays.stream(listInput).map(Float::valueOf).toArray(Float[]::new);

		Mean man = new Mean(list);
		
		
		System.out.println(man.getResult());
	}

}
