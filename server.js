const express = require('express');
const server = express();// Choose a port number

/**server.get('/', (req, res) => {
  res.send('Hello, World!');
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})


const express = require("express");
const server = express()*/
server.use(express.static("public"));

/**server.get('/cat', (request, response, next) => {
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
 */

server.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
server.get('/cat', (request, response, next) => response.sendFile(__dirname + '/views/cat-page.html'));
server.listen(3000,() => console.log('My listening port 3000!'));

    