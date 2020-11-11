require('dotenv').config() // Variables en Archivo .env

const express = require('express');   // Requiro Paquetes Express en node_modules
const bodyParser = require('body-parser'); // Requiro Paquetes Body Parser en node_modules
const cors = require('cors'); // Requiro Paquetes de Cors en node_modules
var cookieParser = require('cookie-parser');

const routes = require('./routes/main');
const passwordRoutes = require('./routes/password');

const app = express();                 // Abro una instancia Express y la llamo app!
const port = process.env.PORT || 3000; // Defino un Puerto a Usar por el Server.

// update Express Settings
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded.
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN })); // Allow requests from other servers.

// setup routes
app.use('/', routes);
app.use('/', passwordRoutes);

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
