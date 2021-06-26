const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kundudinesh007@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welocome to the app, ${name}. Let us know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kundudinesh007@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. Hope to see you sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}