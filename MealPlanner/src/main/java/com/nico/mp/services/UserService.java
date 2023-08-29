package com.nico.mp.services;

import com.nico.mp.domain.User;

public interface UserService {
	
	User getUser(String username, String password);

}
