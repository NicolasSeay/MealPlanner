package com.nico.mp.services.impl;

import com.nico.mp.domain.Ingredient;
import com.nico.mp.repositories.IngredientRepository;
import com.nico.mp.services.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientServiceImpl implements IngredientService {
	
	@Autowired
	private IngredientRepository ingredientRepository;

	@Override
	public List<Ingredient> getIngredients(long recipeId) {
		return ingredientRepository.findAllById(recipeId);
	}

	@Override
	public void saveIngredient(Ingredient ingredient) {
		ingredientRepository.save(ingredient);
	}

	@Override
	public void deleteIngredient(long recipeId, long ingredientId) {
		ingredientRepository.deleteById(recipeId, ingredientId);
	}
	
	

}
