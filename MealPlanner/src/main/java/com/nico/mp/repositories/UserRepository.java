package com.nico.mp.repositories;

import com.nico.mp.domain.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	@Query("SELECT new User(u.id, u.firstname, u.lastname) FROM User u WHERE u.username=?1 AND u.password=?2")
	Optional<User> findUser(String username, String password);


	@Transactional
	@Modifying
	@Query(value = "INSERT INTO User(u.id, u.firstname, u.lastname, u.password) VALUES (?1, ?2, ?3, ?4)", nativeQuery = true)
	Boolean registerUser(String firstName, String lastName, String userName, String password);

}
