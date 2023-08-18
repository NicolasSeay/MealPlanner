package com.nico.mp.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@Getter
@Setter
@Entity
public class UserNoCredentials {

    @Id
    private long id;

    private String firstname;

    private String lastname;
}
