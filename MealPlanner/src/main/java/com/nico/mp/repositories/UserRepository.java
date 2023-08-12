package com.nico.mp.repositories;

import com.nico.mp.domain.UserNoCredentials;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserNoCredentials, Long> {
	
	@Query("SELECT new UserNoCredentials(u.id, u.firstName, u.lastName) FROM User u WHERE u.username=?1 AND u.password=?2")
	public Optional<UserNoCredentials> findUser(String username, String password);

}
