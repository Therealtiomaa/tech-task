CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    name VARCHAR(100),
    age INT,
    favorite_food VARCHAR(100)
);

INSERT INTO animals (type, name, age, favorite_food)
VALUES 
    ('cat', 'Whiskers', 5, 'salmon'),
    ('dog', 'Buddy', 6, 'beef'),
    ('cat', 'Kitty', 3, 'tuna'),
    ('dog', 'Max', 4, 'chicken');

SELECT * FROM animals;

