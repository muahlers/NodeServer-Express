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
    defaultLayout: null,
    partialsDir: './templates/',
    layoutsDir: './templates'
  },
  viewPath: path.resolve('./templates/'),
  extName: '.html'
};

stmpTransport.use('compile', hbs(handlebarsOptions));

// Creo una instancia de express para manejar rutas llamada Router.
const router = express.Router();

router.post('/forget-password', async (request, response, done) => {
  if(!request.body || !request.body.email) {
    response.status(400).json({ message: "invalid email", status: "400"});
  } else {
          try{
            const userEmail = request.body.email;
            // Send User a Email to reset password
            const emailOptions = {
              to: userEmail,
              from: email,
              template: 'forgot-password',
              subject: 'Game Reset Password',
              // Aqui pongo las variables que van dentro del email
              context: {
                name: 'joe',
                url: `http://localhost:${process.env.PORT || 3000}`
              }
            };
            await stmpTransport.sendMail(emailOptions);
            response.status(200).json({ message: 'An email has been sent to your email address, Password reset link is only valid for 10 min', status: "200"});
          } catch (error) {
                return done(error);
          }
    }
});

router.post('/reset-password', async (request, response, done) => {
  if(!request.body || !request.body.email) {
    response.status(400).json({ message: "invalid email", status: "400"});
  } else {
      try {
          const userEmail = request.body.email;

          // Send User a Email telling password updates
          const emailOptions = {
            to: userEmail,
            from: email,
            template: 'reset-password',
            subject: 'Game Updated Password',
            // Aqui pongo las variables que van dentro del email
            context: {
              name: 'joe'
            }
          };
          await stmpTransport.sendMail(emailOptions);
          response.status(200).json({ message: 'password updated', status: "200"});
        } catch (error) {
            return done(error);
        }
  }
});

module.exports = router;
