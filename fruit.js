const express = require("express");
const path = require("path");

const app = express();

// Array to store fruits
let fruits = [];


// Endpoint to add a fruit
app.get("/add-fruit", (req, res) => {
    const fruit = req.query.fruit; // Get fruit from query parameters
    if (fruit) {
        fruits.push(fruit); // Add the fruit to the list
    }

    // Create an HTML response for the fruits list
    const fruitList = `
        <h2>Fruits List:</h2>
        <ul>${fruits.map(item => `<li>${item}</li>`).join('')}</ul>
      
    `;
console.log(fruits);

    res.send(fruitList); // Send the HTML response
});

// Start the server on port 5000
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
