// Import the Express module
const express = require('express');
const path = require('path');

// Create an instance of Express
const app = express();

// Serve static content from the 'public' folder
app.use(express.static('public'));

// Define a route for the root URL to display main.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Set the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
