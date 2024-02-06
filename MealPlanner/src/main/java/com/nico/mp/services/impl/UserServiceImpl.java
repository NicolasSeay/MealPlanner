package com.nico.mp.services.impl;

import com.nico.mp.constants.ErrorCodes;
import com.nico.mp.domain.User;
import com.nico.mp.repositories.UserRepository;
import com.nico.mp.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.Optional;

import static com.nico.mp.constants.ErrorCodes.*;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User getUser(String username, String password) {
		return userRepository.findUser(username, password).orElse(null);
	}

	@Override
	public Boolean registerUser(String firstName, String lastName, String userName, String password) {
		boolean registrationSuccess;
		Optional<BigInteger> optionalId;
		BigInteger id;
		try {
			optionalId = userRepository.getMaxId();
			id = optionalId.orElseThrow(() -> new Exception(ERROR_SETTING_USER_ID));

		} catch (Exception e) {
			registrationSuccess = false;
			return registrationSuccess;
		}
		try {
			log.info("REQUEST PAYLOAD: ", id, " ", firstName, " ", lastName, " ", userName, " ", password);
			userRepository.registerUser(id, firstName, lastName, userName, password);
			registrationSuccess = true;
		} catch(Exception e) {
			registrationSuccess = false;
		}
		return registrationSuccess;
    }

}
