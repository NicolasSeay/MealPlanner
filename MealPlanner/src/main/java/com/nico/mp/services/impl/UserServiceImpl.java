package com.nico.mp.services.impl;

import com.nico.mp.domain.User;
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
	public User getUser(String username, String password) {
		return userRepository.findUser(username, password).orElse(null);
	}

	@Override
	public Boolean registerUser(String firstName, String lastName, String userName, String password) {
		return userRepository.registerUser(firstName, lastName, userName, password);
    }

}
