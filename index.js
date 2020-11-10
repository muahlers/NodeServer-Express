const express = require('express');   // Requiro Paquetes Express en node_modules
const app = express();                // Abro una instancia Express y la llamo app!
const port = 3000;                  // Defino un Puerto a Usar por el Server.

app.get('/', (request, response) => {
  response.send("Hello World");
});

app.get('/test', (request, response) => {
  response.send("Test");
});

app.listen(port, () => {
  console.log(`Server is Running in Port: ${port}`);
});
