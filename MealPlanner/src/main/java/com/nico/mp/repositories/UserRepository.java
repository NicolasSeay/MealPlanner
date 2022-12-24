package com.nico.mp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nico.mp.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	@Query("SELECT u FROM User u WHERE u.username=?1 AND u.password=?2")
	public Optional<User> findUser(String username, String password);

}
