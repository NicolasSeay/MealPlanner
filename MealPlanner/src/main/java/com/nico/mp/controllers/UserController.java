package com.nico.mp.controllers;

import com.nico.mp.domain.User;
import com.nico.mp.domain.UserNoCredentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nico.mp.domain.LoginRequest;
import com.nico.mp.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<UserNoCredentials> login(@RequestBody LoginRequest loginRequest) {
		return new ResponseEntity<UserNoCredentials>(
			userService.getUser(loginRequest.getUsername(), loginRequest.getPassword()),
			HttpStatus.OK
		);
	}
	
}
