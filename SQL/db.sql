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
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	user_id BIGINT,
	name VARCHAR(32),
	servings INT,
	prep_time INT,
	total_price DOUBLE,
	total_cals INT,
	notes VARCHAR(1000),
    CONSTRAINT fk_user FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE CASCADE
);

CREATE TABLE ingredient (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    recipe_id BIGINT,
    name VARCHAR(32),
    amount DOUBLE,
    measurement VARCHAR(10),
    price DOUBLE,
    calories INT,
    CONSTRAINT fk_recipe FOREIGN KEY (recipe_id)
    REFERENCES recipe(id)
    ON DELETE CASCADE
);