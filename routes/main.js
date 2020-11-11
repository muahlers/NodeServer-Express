const express = require('express');
// Creo una instancia de express para manejar rutas llamada Router.
const router = express.Router();

router.get('/', (request, response) => {
  response.send("Hello World");
});

router.get('/status', (request, response) => {
  response.status(200).json({ message: "ok", status: "200"});
});

router.post('/signup', (request, response) => {
  if(!request.body) {
    response.status(400).json({ message: "invalid body", status: "400"});
  } else {
        response.status(200).json({ message: "ok", status: "200"});
  }
});

router.post('/login', (request, response) => {
  if(!request.body) {
    response.status(400).json({ message: "invalid body", status: "400"});
  } else {
        response.status(200).json({ message: "ok", status: "200"});
  }
});

router.post('/logout', (request, response) => {
  if(!request.body) {
    response.status(400).json({ message: "invalid body", status: "400"});
  } else {
        response.status(200).json({ message: "ok", status: "200"});
  }
});

router.post('/token', (request, response) => {
  if(!request.body || !request.body.refreshToken) {
    response.status(400).json({ message: "invalid token", status: "400"});
  } else {
        const { refreshToken} = request.body; // const refreshToken = response.body.refreshToken.
        response.status(200).json({ message: `refresh token requested for token ${refreshToken}`, status: "200"});
  }
});

module.exports = router;
