package com.nico.mp.controllers;

import com.nico.mp.domain.LoginRequest;
import com.nico.mp.domain.RegisterRequest;
import com.nico.mp.domain.User;
import com.nico.mp.services.UserService;
import com.nico.mp.util.JWTUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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

	@Autowired
	private JWTUtil jwtUtil;
	
	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody LoginRequest loginRequest) {
		log.info("Received login request");
		User user = userService.getUser(loginRequest.getUsername(), loginRequest.getPassword());

		if (user == null) {
			log.info("Login - user not found");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			log.info("Login - user found: {}", user.getId());
			log.info("Login - generating/refreshing JWT");

			HttpHeaders headers = new HttpHeaders();
			headers.set("Access-Control-Expose-Headers", "Authorization");
			headers.set("Authorization", jwtUtil.generateToken(user));
			return ResponseEntity.ok()
					.headers(headers)
					.body(user);
		}
	}

	@PostMapping("/register")
	public ResponseEntity<Boolean> register(@RequestBody RegisterRequest registerRequest) {
		log.info("Registration request received");
		Boolean registerUser = userService.registerUser(registerRequest.getFirstName(),
				registerRequest.getLastName(),
				registerRequest.getUserName(),
				registerRequest.getPassword());
		if (Boolean.FALSE.equals(registerUser)) {
			log.info("Registration - Failed to Register User");
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else {
			log.info("Registration - User Registered");
			log.info("Logging User In");

			return ResponseEntity.ok()
					.body(registerUser);
		}


	}
	
}
