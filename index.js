const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('<h1>WEB PAGE<h2>whit<p>EC2'); 
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});