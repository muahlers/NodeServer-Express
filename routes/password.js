const express = require('express');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

// Configuro Email Sender
const email = process.env.EMAIL_ACCOUNT
const password = process.env.EMAIL_PASSWORD

const stmpTransport = nodemailer.createTransport({
  service: process.env.EMAIL_PROVAIDER,
  auth: {
    user: email,
    pass: password
  }
});

const handlebarsOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: './templates/',
    layoutsDir: './templates'
  },
  viewPath: path.resolve('./templates/'),
  extName: '.html'
};

stmpTransport.use('compile', hbs(handlebarsOptions));

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
