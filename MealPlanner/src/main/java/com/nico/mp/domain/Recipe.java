package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Recipe {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long userId;
	
	private String name;
	
	private Integer servings;
	
	private Integer prepTime;
	
	private Double totalPrice;
	
	private Integer totalCals;
	
	private String notes;

	@OneToMany
	private List<Ingredient> ingredients = new ArrayList<>();

}
