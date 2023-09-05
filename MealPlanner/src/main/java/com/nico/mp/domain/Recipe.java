package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
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
	
	private String notes;

	@OneToMany
	private List<Ingredient> ingredients;

	@OneToMany
	private List<Instruction> instructions;

}
