package com.nico.mp.services;

import com.nico.mp.domain.User;
import com.nico.mp.domain.UserNoCredentials;

public interface UserService {
	
	public UserNoCredentials getUser(String username, String password);

}
