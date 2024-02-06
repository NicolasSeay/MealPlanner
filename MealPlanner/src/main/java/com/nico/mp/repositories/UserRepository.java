package com.nico.mp.repositories;

import com.nico.mp.domain.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.Optional;

import static com.nico.mp.constants.Constants.GET_USER_ID_QUERY;
import static com.nico.mp.constants.Constants.REGISTER_USER_QUERY;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	
	@Query("SELECT new User(u.id, u.firstname, u.lastname) FROM User u WHERE u.username=?1 AND u.password=?2")
	Optional<User> findUser(String username, String password);

	@Query(value = GET_USER_ID_QUERY, nativeQuery = true)
	Optional<BigInteger> getMaxId();


	@Transactional
	@Modifying
	@Query(value = REGISTER_USER_QUERY, nativeQuery = true)
	void registerUser(BigInteger id, String firstName, String lastName, String userName, String password);

}
