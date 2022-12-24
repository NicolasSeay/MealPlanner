package com.nico.mp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nico.mp.domain.Ingredient;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Long> {

	@Query("SELECT i FROM Ingredient i WHERE i.recipe_id=?1")
	List<Ingredient> findAllById(long recipeId);
	
	@Query("DELETE FROM Ingredient WHERE recipe_id=?1 AND id=?2")
	void deleteById(long recipeId, long ingredientId);

}
