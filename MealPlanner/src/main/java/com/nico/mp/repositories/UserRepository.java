package com.nico.mp.repositories;

import java.util.Optional;

import com.nico.mp.domain.UserNoCredentials;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserNoCredentials, Long> {
	
	@Query("SELECT new UserNoCredentials(u.id, u.firstName, u.lastName) FROM User u WHERE u.username=?1 AND u.password=?2")
//	@Query("SELECT u FROM User u where id=1")
	public Optional<UserNoCredentials> findUser(String username, String password);

}
