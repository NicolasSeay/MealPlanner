package com.nico.mp.services.impl;

import com.nico.mp.domain.Recipe;
import com.nico.mp.repositories.RecipeRepository;
import com.nico.mp.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {
	
	@Autowired
	private RecipeRepository recipeRepository;

	@Override
	public List<Recipe> getAllRecipes(long userId) {
		return recipeRepository.findAllById(userId);
	}

	@Override
	public void saveRecipe(Recipe recipe) {
		recipeRepository.save(recipe);
	}

	@Override
	public void deleteRecipe(Long recipeId) {
		recipeRepository.deleteById(recipeId);
	}

}
