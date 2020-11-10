const express = require('express');   // Requiro Paquetes Express en node_modules
const app = express();                // Abro una instancia Express y la llamo app!
const port = 3000;                  // Defino un Puerto a Usar por el Server.

app.get('/', (request, response) => {
  response.send("Hello World");
});

app.get('/status', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.post('/signup', (request, response, next) => {
  next( new Error('Error Test'));
  //response.status(200).json({ message: "ok", status: "200"});
});

app.post('/login', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.post('/logout', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.post('/token', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.post('/forget-password', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.post('/reset-password', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

// Catch all other routes. Use() catch all that wasn't catch by the upper code.
app.use((request, response) => {
  response.status(404).json({ message: "404 - Not Found", status: "404"});
});

// If a Error Pop ups from another End Point this middlewaer catch it!
app.use((error, request, response, next) => {
  console.log(error);
  response.status(error.status || 500).json({ error: error.message, status: "500"});
});

app.listen(port, () => {
  console.log(`Server is Running in Port: ${port}`);
});
