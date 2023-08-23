package com.nico.mp.repositories;

import com.nico.mp.domain.Ingredient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Long> {

	@Query("SELECT i FROM Ingredient i WHERE i.recipeId=?1")
	List<Ingredient> findAllById(long recipeId);
	
	@Query("DELETE FROM Ingredient WHERE recipeId=?1 AND id=?2")
	void deleteById(long recipeId, long ingredientId);

}
