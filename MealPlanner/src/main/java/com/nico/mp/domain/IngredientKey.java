package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/*
 * This Class is used by the @IdClass annotation on the Ingredient entity.
 * It is necessary because of the composite key (recipe AND ingredient ids)
 */
@Getter
@Setter
public class IngredientKey implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long recipe_id;
	
	private Long id;

}
