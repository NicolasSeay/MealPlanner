package com.nico.mp.services.impl;

import java.util.Optional;

import javax.transaction.Transactional;

import com.nico.mp.domain.UserNoCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nico.mp.domain.User;
import com.nico.mp.repositories.UserRepository;
import com.nico.mp.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public UserServiceImpl() {}

	@Override
	public UserNoCredentials getUser(String username, String password) {
		Optional<UserNoCredentials> user = userRepository.findUser(username, password);
		if (user.isEmpty())
			return null;

		UserNoCredentials u = user.get();
		return new UserNoCredentials(u.getId(), u.getFirstName(), u.getLastName());
	}

}
