USE mealplanner;

# clear any existing data before filling with dummy data
DELETE FROM ingredient;
DELETE FROM recipe;
DELETE FROM user;

# User data
INSERT INTO user VALUES
(1, "Nico", "password1"),
(2, "Random", "password2");

# Recipe data
INSERT INTO recipe VALUES
(1, 1, "Chili", 4, 90, NULL, NULL, "Cooking instructions here..."),
(2, 2, "Shells & Beef", 2, 20, NULL, NULL, "Cooking instructions here..."),
(3, 2, "Mac n Cheese", 3, 45, NULL, NULL, "Cooking instructions here...");

# Ingredient data
INSERT INTO ingredient VALUES
(1, 2, "Ground beef", 2, "lbs", "16", NULL),
(2, 2, "Macaroni", 1, "box", 3, NULL),
(3, 2, "Pasta sauce", 1, "jar", "3", NULL);

UPDATE recipe SET total_price=(SELECT SUM(price) FROM ingredient WHERE recipe_id=1) WHERE id=1;
UPDATE recipe SET total_price=(SELECT SUM(price) FROM ingredient WHERE recipe_id=2) WHERE id=2;
UPDATE recipe SET total_price=(SELECT SUM(price) FROM ingredient WHERE recipe_id=3) WHERE id=3;