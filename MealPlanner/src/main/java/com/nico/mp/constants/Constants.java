package com.nico.mp.constants;

public class Constants {

    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String GET_USER_ID_QUERY = "SELECT COALESCE(MAX(id), 0) + 1 FROM user";
    public static final String REGISTER_USER_QUERY = "INSERT INTO user(id, firstname, lastname, username, password) VALUES (?1, ?2, ?3, ?4, ?5)";



}
