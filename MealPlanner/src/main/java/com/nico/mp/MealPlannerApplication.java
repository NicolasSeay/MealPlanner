package com.nico.mp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableJpaRepositories("com.nico.mp.repositories")
public class MealPlannerApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(MealPlannerApplication.class, args);
	}

}
