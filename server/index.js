const express = require('express');
const app = express();
const port = 3001;

app.get('/app', (req, res) => {
    res.send('Hello from Node.js, this is served under /app path.');
});

app.get('/app/about', (req, res) => {
    res.send('This is the About page for the Node.js app under /app/about.');
});

app.get('/app/contact', (req, res) => {
    res.send('This is the Contact page for the Node.js app under /app/contact.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});