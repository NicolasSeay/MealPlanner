package com.nico.mp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nico.mp.domain.Recipe;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Long> {

	@Query("SELECT r FROM Recipe r WHERE r.user_id=?1")
	List<Recipe> findAllById(long userId);

}
