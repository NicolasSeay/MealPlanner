package com.nico.mp.controllers;

import com.nico.mp.domain.Recipe;
import com.nico.mp.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipe")
public class RecipeController {
	
	@Autowired
	private RecipeService recipeService;
	
	@GetMapping
	public ResponseEntity<List<Recipe>> recipes(@RequestParam long userId) {
		List<Recipe> recipes = recipeService.getAllRecipes(userId);
		
		return recipes.isEmpty()
			? new ResponseEntity<List<Recipe>>(HttpStatus.NO_CONTENT)
			: new ResponseEntity<List<Recipe>>(recipes, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Void> addRecipe(@RequestBody Recipe recipe) {
		try {
			recipeService.saveRecipe(recipe);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/remove")
	public ResponseEntity<Void> deleteRecipe(@RequestParam long recipeId) {
		try {
			recipeService.deleteRecipe(recipeId);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
