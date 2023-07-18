package com.nico.mp.services;

import com.nico.mp.domain.Ingredient;

import java.util.List;

public interface IngredientService {

	List<Ingredient> getIngredients(long recipeId);

	void saveIngredient(Ingredient ingredient);

	void deleteIngredient(long recipeId, long ingredientId);

}
