package com.nico.mp.controllers;

import com.nico.mp.domain.Ingredient;
import com.nico.mp.services.IngredientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/ingredient")
public class IngredientController {
	
	@Autowired
	private IngredientService ingredientService;
	
	@GetMapping("/{recipeId}")
	public ResponseEntity<List<Ingredient>> ingredients(@PathVariable Long recipeId) {
		List<Ingredient> ingredients = ingredientService.getIngredients(recipeId);
		
		return ingredients.isEmpty()
			? new ResponseEntity<List<Ingredient>>(HttpStatus.NO_CONTENT)
			: new ResponseEntity<List<Ingredient>>(ingredients, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Void> addIngredient(@RequestBody Ingredient ingredient) {
		try {
			ingredientService.saveIngredient(ingredient);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/remove")
	public ResponseEntity<Void> deleteIngredient(@RequestParam Long recipeId, @RequestParam Long ingredientId)
	{
		try {
			ingredientService.deleteIngredient(recipeId, ingredientId);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
