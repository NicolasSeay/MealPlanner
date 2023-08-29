package com.nico.mp.services;

import com.nico.mp.domain.Ingredient;

import java.util.List;

public interface IngredientService {

	List<Ingredient> getIngredients(Long recipeId);

	void saveIngredient(Ingredient ingredient);

	void deleteIngredient(Long recipeId, Long ingredientId);

}
