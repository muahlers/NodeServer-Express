const express = require('express');   // Requiro Paquetes Express en node_modules
const bodyParser = require('body-parser'); // Requiro Paquetes Body Parser en node_modules
const app = express();                // Abro una instancia Express y la llamo app!
const port = 3000;                  // Defino un Puerto a Usar por el Server.

// update Express Settings
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded.
app.use(bodyParser.json()); // parse application/json

// End Points Table

app.get('/', (request, response) => {
  response.send("Hello World");
});

app.get('/status', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

app.post('/signup', (request, response) => {
  console.log(request.body);
  if(!request.body) {
    response.status(400).json({ message: "invalid body", status: "400"});
  } else {
        response.status(200).json({ message: "ok", status: "200"});
  }
});

app.post('/login', (request, response) => {
  if(!request.body) {
    response.status(400).json({ message: "invalid body", status: "400"});
  } else {
        response.status(200).json({ message: "ok", status: "200"});
  }
});

app.post('/logout', (request, response) => {
  if(!request.body) {
    response.status(400).json({ message: "invalid body", status: "400"});
  } else {
        response.status(200).json({ message: "ok", status: "200"});
  }
});

app.post('/token', (request, response) => {
  if(!request.body || !request.body.refreshToken) {
    response.status(400).json({ message: "invalid token", status: "400"});
  } else {
        const { refreshToken} = request.body; // const refreshToken = response.body.refreshToken.
        response.status(200).json({ message: `refresh token requested for token ${refreshToken}`, status: "200"});
  }
});

app.post('/forget-password', (request, response) => {
  if(!request.body || !request.body.email) {
    response.status(400).json({ message: "invalid email", status: "400"});
  } else {
        const { email } = request.body; // const email = response.body.email.
        response.status(200).json({ message: `forgot password requested for email ${email}`, status: "200"});
  }
});

app.post('/reset-password', (request, response) => {
  if(!request.body || !request.body.email) {
    response.status(400).json({ message: "invalid email", status: "400"});
  } else {
        const { email } = request.body; // const email = response.body.email.
        response.status(200).json({ message: `password reset requested for email ${email}`, status: "200"});
  }
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
