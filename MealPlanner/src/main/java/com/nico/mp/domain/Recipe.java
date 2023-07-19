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
	
	private Long user_id;
	
	private String name;
	
	private Integer servings;
	
	private Integer prep_time;
	
	private Double total_price;
	
	private Integer total_cals;
	
	private String notes;

	@Override
	public String toString() {
		return "Recipe{" +
				"id=" + id +
				", user_id=" + user_id +
				", name='" + name + '\'' +
				", servings=" + servings +
				", prep_time=" + prep_time +
				", total_price=" + total_price +
				", total_cals=" + total_cals +
				", notes='" + notes + '\'' +
				'}';
	}
}
