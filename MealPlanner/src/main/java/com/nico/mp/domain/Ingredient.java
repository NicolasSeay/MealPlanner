package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

@Getter
@Setter
@Entity
@IdClass(IngredientKey.class)
public class Ingredient implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	private Long id;
	
	@Id
	private Long recipe_id;
	
	private String name;
	
	private Double amount;
	
	private String measurement;
	
	private Double price;
	
	private Integer calories;

}
