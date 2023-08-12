package com.nico.mp.controllers;

import com.nico.mp.domain.LoginRequest;
import com.nico.mp.domain.UserNoCredentials;
import com.nico.mp.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<UserNoCredentials> login(@RequestBody LoginRequest loginRequest) {
		log.info("Received login request");
		UserNoCredentials user = userService.getUser(loginRequest.getUsername(), loginRequest.getPassword());

		if (user != null) {
			log.info("Login - user found: {}", user.getId());
			return new ResponseEntity<>(user, HttpStatus.OK);
		} else {
			log.info("Login - user not found");
			return new ResponseEntity<>(null, HttpStatus.OK);
		}
	}
	
}
