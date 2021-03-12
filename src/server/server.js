const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors({origin:true,credentials: true}));

app.use('/', express.static('build'));

let transporter = nodemailer.createTransport(transport,defaults)
transporter.sendMail(data)

var listener = app.listen(5000, function() {
    console.log('Listening on port ' + listener.address().port);
});