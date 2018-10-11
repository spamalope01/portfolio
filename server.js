var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var port = process.env.PORT || 9000;

//var password = require('./variables');
//var pass = stone905;
// var pass = password.password;
// var user = password.user;


app.use(express.static(__dirname + '/app'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: spamalope01,
    pass: stone905
  }
});

app.get('/send', function(req, res) {
  console.log('in the send');
  var mailOptions = {
    to : "jdanielwebdev@gmail.com",
    subject: "Inquiry about work.",
    from: req.query.email,
    phone: req.query.phone,
    email: req.query.email,
    text : "You have received a project request. \n \n Contact Name: " + req.query.from + ". \n \n Contact email: " + req.query.email + ". \n \n Contact phone: " + req.query.phone + " \n \n Message: " + req.query.text
  };
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log('there was a problem', error);
      res.end("error");
    }else{
      console.log("Message sent: " + res.message);
      res.end("sent");
    }
  });
});


app.listen(port, function(){
  console.log('Listening on port:', port);
});
