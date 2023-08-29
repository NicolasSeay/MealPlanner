package com.nico.mp.services;

import com.nico.mp.domain.Recipe;

import java.util.List;

public interface RecipeService {
	
	public List<Recipe> getAllRecipes(Long userId);
	
	public void saveRecipe(Recipe recipe);
	
	public void deleteRecipe(Long recipeId);

}
