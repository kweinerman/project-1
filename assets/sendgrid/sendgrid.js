// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
const apiKey = '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';
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'kurt.weinerman@gmail.com', // Change to your recipient
  from: 'kurt.weinerman@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })


