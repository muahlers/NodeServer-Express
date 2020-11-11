const express = require('express');
// Creo una instancia de express para manejar rutas llamada Router.
const router = express.Router();

router.post('/forget-password', (request, response) => {
  if(!request.body || !request.body.email) {
    response.status(400).json({ message: "invalid email", status: "400"});
  } else {
        const { email } = request.body; // const email = response.body.email.
        response.status(200).json({ message: `forgot password requested for email ${email}`, status: "200"});
  }
});

router.post('/reset-password', (request, response) => {
  if(!request.body || !request.body.email) {
    response.status(400).json({ message: "invalid email", status: "400"});
  } else {
        const { email } = request.body; // const email = response.body.email.
        response.status(200).json({ message: `password reset requested for email ${email}`, status: "200"});
  }
});

module.exports = router;
