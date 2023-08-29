-- CREATE DATABASE mealplanner;
USE mealplanner;

DROP TABLE IF EXISTS recipe_ingredients;
DROP TABLE IF EXISTS user_no_credentials;
DROP TABLE IF EXISTS ingredient;
DROP TABLE IF EXISTS recipe;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	firstname VARCHAR(32) NOT NULL,
    lastname VARCHAR(32),
	username VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL
);

CREATE TABLE recipe (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	user_id BIGINT,
	name VARCHAR(32),
	servings INT,
	prep_time INT,
	total_price DOUBLE,
	total_cals INT,
	notes VARCHAR(1000),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE ingredient (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    recipe_id BIGINT,
    name VARCHAR(32),
    amount DOUBLE,
    unit VARCHAR(10),
    price DOUBLE,
    calories INT,
    FOREIGN KEY (recipe_id) REFERENCES recipe(id) ON DELETE CASCADE
);
