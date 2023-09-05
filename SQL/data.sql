USE mealplanner;

# clear any existing data before filling with dummy data
DELETE FROM ingredient;
DELETE FROM recipe;
-- DELETE FROM credentials;
DELETE FROM user;

# User data
INSERT INTO user VALUES
(1, "Nico", "Seay", "nico", "password"),
(2, "Bobby", "Tables", "username", "password");

# Recipe data
INSERT INTO recipe VALUES
(1, 1, "Chili", 4, 90, "Cooking instructions here..."),
(2, 2, "Shells & Beef", 2, 20, "Cooking instructions here..."),
(3, 1, "Mac n Cheese", 3, 45, "Cooking instructions here...");

# Ingredient data
INSERT INTO ingredient VALUES
(1, 2, "Ground beef", 2, "lbs", 16, 800),
(2, 2, "Macaroni", 1, "box", 3, 300),
(3, 2, "Pasta sauce", 1, "jar", 3, 200),
(4, 3, "Macaroni", 12, "oz", 2, 300),
(5, 3, "Cheese", 8, "oz", 4, 400),
(6, 1, "Ground beef", 2, "lbs", 16, 800),
(7, 1, "beans", 4, "cans", 4, 400),
(8, 1, "Chili Powder", 4, "tbsp", 1, 50);

# Instruction data
INSERT INTO instruction VALUES
(1, 1, 1, "Prep spices"),
(2, 1, 2, "Cook da beef"),
(3, 1, 3, "Shake it all up"),
(4, 2, 1, "Boil da water"),
(5, 2, 2, "Cook da pasta"),
(6, 2, 3, "Cheese it up");

