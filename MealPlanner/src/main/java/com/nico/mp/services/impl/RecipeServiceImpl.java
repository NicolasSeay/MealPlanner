package com.nico.mp.services.impl;

import com.nico.mp.domain.Recipe;
import com.nico.mp.repositories.IngredientRepository;
import com.nico.mp.repositories.InstructionRepository;
import com.nico.mp.repositories.RecipeRepository;
import com.nico.mp.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {
	
	@Autowired
	private RecipeRepository recipeRepository;

	@Autowired
	private IngredientRepository ingredientRepository;

	@Autowired
	private InstructionRepository instructionRepository;

	@Override
	public List<Recipe> getAllRecipes(Long userId) {
		// Get all recipes, but their Ingredients and Instructions will be empty
		List<Recipe> recipes = recipeRepository.findAllById(userId);
		// Retrieve and set recipe ingredients & instructions
		recipes.forEach(r -> {
			r.setIngredients(ingredientRepository.findAllById(r.getId()));
			r.setInstructions(instructionRepository.findAllById(r.getId()));
		});

		return recipes;
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
