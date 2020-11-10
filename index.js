const express = require('express');   // Requiro Paquetes Express en node_modules
const app = express();                // Abro una instancia Express y la llamo app!
const port = 3000;                  // Defino un Puerto a Usar por el Server.

app.get('/', (request, response) => {
  response.send("Hello World");
});

app.get('/status', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.post('/signup', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.listen(port, () => {
  console.log(`Server is Running in Port: ${port}`);
});
