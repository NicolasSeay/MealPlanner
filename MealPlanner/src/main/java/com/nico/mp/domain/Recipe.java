package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

	@Override
	public String toString() {
		return "Recipe{" +
				"id=" + id +
				", user_id=" + userId +
				", name='" + name + '\'' +
				", servings=" + servings +
				", prep_time=" + prepTime +
				", total_price=" + totalPrice +
				", total_cals=" + totalCals +
				", notes='" + notes + '\'' +
				'}';
	}
}
