// app.js

const express = require('express');
const app = express();
const port = 3000; // Choose your desired port

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});