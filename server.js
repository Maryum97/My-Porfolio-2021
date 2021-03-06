const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // cross origin resource sharing
const bodyParser = require('body-parser');

require("dotenv").config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 7000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // email provider
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

app.post('/send', (req, res, next) => {
    console.log('req.body: ', req.body);
    var name = req.body.name
    var email = 'maryumbokhari97@gmail.com'
    var message = req.body.message

    var mail = {
        from: name,
        to: email,
        text: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

app.post("/send", function(req, res) {
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
  });

app.listen(PORT, () => console.log('Now listening'));