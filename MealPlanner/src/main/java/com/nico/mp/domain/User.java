package com.nico.mp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class User {
	
	@Id
	private long id;
	
	private String firstName;
	
	private String lastName;

	private String username;

	private String password;

}
