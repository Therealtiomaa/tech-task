# Bazaarvoice Test Task

This repository contains my completed assignment for the Frontend Developer role at Bazaarvoice.

## Project Overview

This test task covers the following:

- Converting Ruby code to JavaScript
- Creating basic classes for `Cat` and `Dog` objects
- Simulating a simple database (no actual connection needed)
- Writing SQL for data storage structure
- Implementing basic tests to validate the code

## Project Structure

- **`Cat.js`**: Contains the Cat class, which includes properties like `name`, `age`, and `favoriteFood`, as well as methods for interacting with these properties.
- **`Dog.js`**: Contains a Dog class with similar structure to Cat.
- **`petShop.js`**: Main script to simulate a pet shop with basic operations on cats and dogs.
- **`homework.sql`**: SQL file with table structure and sample data for animals.
- **`tests`**: Folder with simple tests to check functionality.

## How to Install and Run the Code

### 1. Clone the Repository

Open a terminal and run:
```bash

git clone https://github.com/Therealtiomaa/tech-task.git
cd tech-task

2. Install Node.js

Make sure Node.js is installed. Download it here if needed.

3. Run the Code
To execute the code, run node petShop.js in the terminal:

node petShop.js

Coding Tasks Overview

Part 1 - Basic Cat and Data Classes

Cat Class

The Cat class is the main class for managing a cat's details. It includes:

Properties:

- name: The cat’s current name.
- age: A random age set between 5 and 10 when the cat is created.
- favoriteFood: The cat’s favorite food, which can be set later.
- namesHistory: A list to store all previous names the cat has had.
- speakCount: Tracks how many times the cat has "spoken" to handle age updates. 

Methods:

- getName(), getAge(), getFavoriteFood(): Retrieves the cat’s current name, age, and favorite food.
- getNames(): Displays all names the cat has had in its history.
- getAverageNameLength(): Calculates the average length of all names (current and past).
- setName(newName): Sets a new name for the cat, adding the previous name to the history.
- setAge(newAge) and setFavoriteFood(newFavoriteFood): Set the cat’s age and favorite food.
- speak(initialSpeak = "meow"): Prints "meow" (or a specified word) and increments a counter. Every 5 uses of speak, the cat’s age increases by 1.


Database Simulation

Since there’s no actual database, the db object in petShop.js acts as a pretend database to store and manage cat and dog records.

Part 2 - Pet Shop Features

In petShop.js, three main functions simulate a pet shop's operations:

saveTest(): Adds a cat named "Kot" and a dog named "Sobaka" to the pretend database (db).
savePetShop(petType): Creates and stores three nameless pets of a specified type (either cat or dog), using keys like "cat1", "cat2", etc., in db.
logStats(): Logs the details of all pets in the database and the total pet count.


Part 3 - SQL Tasks

The homework.sql file includes basic SQL commands to set up a database for animals:
Creating the Table: The animals table contains:
id: Primary key for each animal.
type: Type of animal (cat or dog).
name: Name of the pet (optional).
age: Age of the pet.
favorite_food: Stores each pet's favorite food.
Sample Data: Some example records for cats and dogs, each with a type, name, age, and favorite food.
Example SQL command to retrieve all animals:
SELECT * FROM animals;

Part 4 - Testing Tasks

To ensure the functionality of the code, simple tests are included:

Cat’s Initial Age Test: Verifies that a cat’s age is randomly set between 5 and 10.
speak() Method Test: Checks that the speak() method correctly returns "meow".

To run these tests:
npm test