package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
public class Recipe {
	
	@Id
//	@GeneratedValue
	private Long id;
	
	private Long user_id;
	
	private String name;
	
	private Integer servings;
	
	private Integer prep_time;
	
	private Double total_price;
	
	private Integer total_cals;
	
	private String notes;

}
