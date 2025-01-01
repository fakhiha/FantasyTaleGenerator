const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS, assets)
app.use(express.static(path.join(__dirname, '')));  // Serve the current directory (your project folder)

// Endpoint to fetch lore prompts from the text file
app.get('/lore-prompts', (req, res) => {
    fs.readFile(path.join(__dirname, 'lore-prompts.txt'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading lore prompts');
        } else {
            res.send(data);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
