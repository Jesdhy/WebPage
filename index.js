const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Web page in EC2</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>WEB PAGE</h1>
        <h2>whit</h2>
        <p>EC2</p>
      </body>
      </html>
    `);
  });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
