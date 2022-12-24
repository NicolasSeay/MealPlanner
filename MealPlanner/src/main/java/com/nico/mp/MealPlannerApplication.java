package com.nico.mp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EnableJpaRepositories("com.nico.mp.repositories")
public class MealPlannerApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(MealPlannerApplication.class, args);
	}

}
