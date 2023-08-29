/**const express = require('express');
const server = express();
const port = 3000; // Choose a port number

server.get('/', (req, res) => {
  res.send('Hello, World!');
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

// Make everything inside of public/ available*/
const express = require("express");
const app = express()
app.use(express.static('public'))

app.get('/cat', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
  `);
});

// ...



