-- CREATE DATABASE mealplanner;
USE mealplanner;

DROP TABLE ingredient;
DROP TABLE recipe;
DROP TABLE user;

CREATE TABLE user (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(32) NOT NULL,
    password VARCHAR(32) NOT NULL
);

CREATE TABLE recipe (
	id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT REFERENCES user(id),
	name VARCHAR(32),
	servings INT,
	prep_time INT,
	total_price DOUBLE,
	total_cals INT,
	notes VARCHAR(1000)
);

CREATE TABLE ingredient (
	id INT PRIMARY KEY AUTO_INCREMENT,
    recipe_id INT REFERENCES recipe(id),
    name VARCHAR(32),
    amount DOUBLE,
    measurement VARCHAR(10),
    price DOUBLE,
    calories INT
);