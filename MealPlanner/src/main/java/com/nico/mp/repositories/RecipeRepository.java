package com.nico.mp.repositories;

import com.nico.mp.domain.Recipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Long> {

	@Query("SELECT r FROM Recipe r WHERE r.user_id=?1")
	List<Recipe> findAllById(long userId);

}
