var nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2')

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        xoauth2:xoauth2.createXOAuth2Generator({
            user: process.env.FROMGAMIL,
            clientId: process.env.OAUTHCLIENTID,
            clientSecret:process.env.OAUTHCLIENTSECRET
        })
       

    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: process.env.FROMGAMIL, // sender address
    to: 'saradamathan2311@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});