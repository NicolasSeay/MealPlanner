package com.nico.mp.repositories;

import com.nico.mp.domain.Ingredient;
import com.nico.mp.domain.Instruction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstructionRepository extends CrudRepository<Ingredient, Long> {

    @Query("SELECT i FROM Instruction i WHERE i.recipeId=?1 ORDER BY i.ordering ASC")
    List<Instruction> findAllById(Long recipeId);

}
