package com.nico.mp.controllers;

import com.nico.mp.domain.Recipe;
import com.nico.mp.services.RecipeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipe")
@Slf4j
public class RecipeController {
	
	@Autowired
	private RecipeService recipeService;
	
	@GetMapping
	public ResponseEntity<List<Recipe>> recipes(@RequestParam long userId) {
		log.info("Recipes - received recipe list request");
		List<Recipe> recipes = recipeService.getAllRecipes(userId);

		log.info("Recipes - recipe list size: {}", recipes.size());
		if (recipes.size() > 0) {
			log.info("Recipes - recipe list items:");
			recipes.forEach(r ->
					log.info("{}", r)
			);
			log.info("Recipes - end of recipe list");
		}
		return recipes.isEmpty()
			? new ResponseEntity<List<Recipe>>(HttpStatus.NO_CONTENT)
			: new ResponseEntity<List<Recipe>>(recipes, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Void> addRecipe(@RequestBody Recipe recipe) {
		log.info("AddRecipe - received addRecipe request");
		try {
			recipeService.saveRecipe(recipe);
		} catch (Exception e) {
			log.info("AddRecipe - recipe not added/updated", e);
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
		log.debug("AddRecipe - recipe added/updated");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/remove")
	public ResponseEntity<Void> deleteRecipe(@RequestParam long recipeId) {
		log.info("DeleteRecipe - received deleteRecipe request");
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
