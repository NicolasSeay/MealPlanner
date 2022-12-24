package com.nico.mp.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nico.mp.domain.Ingredient;
import com.nico.mp.repositories.IngredientRepository;
import com.nico.mp.services.IngredientService;

@Service
public class IngredientServiceImpl implements IngredientService {
	
	@Autowired
	private IngredientRepository ingredientRepository;
	
	public IngredientServiceImpl() {}

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
