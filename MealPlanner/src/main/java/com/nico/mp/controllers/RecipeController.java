package com.nico.mp.controllers;

import com.nico.mp.domain.Recipe;
import com.nico.mp.services.RecipeService;
import com.nico.mp.util.JWTUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/recipe")
public class RecipeController {
	
	@Autowired
	private RecipeService recipeService;

	@Autowired
	private JWTUtil jwtUtil;
	
	@GetMapping("/{userId}")
	public ResponseEntity<List<Recipe>> recipes(@PathVariable Long userId) {
		List<Recipe> recipes = recipeService.getAllRecipes(userId);
		log.info("Recipes - recipe list size: {}", recipes.size());

		return recipes.isEmpty()
			? new ResponseEntity<>(HttpStatus.NO_CONTENT)
			: new ResponseEntity<>(recipes, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Void> addRecipe(@RequestBody Recipe recipe) {
		try {
			recipeService.saveRecipe(recipe);
		} catch (Exception e) {
			log.info("AddRecipe - recipe not added/updated", e);
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
		log.debug("AddRecipe - recipe added/updated");
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/remove/{recipeId}")
	public ResponseEntity<Void> deleteRecipe(@PathVariable Long recipeId) {
		try {
			recipeService.deleteRecipe(recipeId);
		} catch (Exception e) {
			log.info("DeleteRecipe - recipe not deleted", e);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		log.debug("DeleteRecipe - recipe deleted");
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
