package com.nico.mp.services;

import java.util.List;

import com.nico.mp.domain.Recipe;

public interface RecipeService {
	
	public List<Recipe> getAllRecipes(long userId);
	
	public Recipe saveRecipe(Recipe recipe);
	
	public void deleteRecipe(Long recipeId);

}
