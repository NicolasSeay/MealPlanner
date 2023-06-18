package com.nico.mp.domain;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

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
