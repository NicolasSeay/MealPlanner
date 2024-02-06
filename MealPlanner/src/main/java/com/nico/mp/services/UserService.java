package com.nico.mp.services;

import com.nico.mp.domain.User;

import java.util.Optional;

public interface UserService {
	
	User getUser(String username, String password);

	Boolean registerUser(User user);


}
