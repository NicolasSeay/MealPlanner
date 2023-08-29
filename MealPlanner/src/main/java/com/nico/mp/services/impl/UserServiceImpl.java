package com.nico.mp.services.impl;

import com.nico.mp.domain.User;
import com.nico.mp.repositories.UserRepository;
import com.nico.mp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User getUser(String username, String password) {
		return userRepository.findUser(username, password).orElse(null);
	}

}
