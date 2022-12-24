package com.nico.mp.services.impl;

import java.util.Optional;

import javax.transaction.Transactional;

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
	public long getUserId(String username, String password) {
		Optional<User> user = userRepository.findUser(username, password);
		
		return user.isPresent() ? user.get().getId() : 0;
	}

}
