package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
public class Ingredient implements Serializable {
	
	private static final Long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long recipeId;
	
	private String name;
	
	private Double amount;
	
	private String unit;
	
	private Double price;
	
	private Integer calories;

}
