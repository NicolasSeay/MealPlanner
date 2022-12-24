package com.nico.mp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nico.mp.domain.LoginRequest;
import com.nico.mp.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/login")
	public ResponseEntity<Long> login(@RequestBody LoginRequest loginRequest) {
		return new ResponseEntity<Long>(
			userService.getUserId(loginRequest.getUsername(), loginRequest.getPassword()),
			HttpStatus.OK
		);
	}
	
}
