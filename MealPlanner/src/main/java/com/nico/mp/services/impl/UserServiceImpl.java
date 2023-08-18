package com.nico.mp.services.impl;

import com.nico.mp.domain.UserNoCredentials;
import com.nico.mp.repositories.UserRepository;
import com.nico.mp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserNoCredentials getUser(String username, String password) {
		Optional<UserNoCredentials> user = userRepository.findUser(username, password);
		if (user.isEmpty()) {
			return null;
		}

		UserNoCredentials u = user.get();
		return new UserNoCredentials(u.getId(), u.getFirstname(), u.getLastname());
	}

}
