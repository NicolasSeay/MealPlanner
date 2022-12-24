package com.nico.mp.services;

import java.util.List;

import com.nico.mp.domain.Ingredient;

public interface IngredientService {

	List<Ingredient> getIngredients(long recipeId);

	void saveIngredient(Ingredient ingredient);

	void deleteIngredient(long recipeId, long ingredientId);

}
