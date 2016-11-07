 // Require our dependencies
var express = require('express');
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var port = process.env.PORT || 3005;

//controllers
var userController = require("./controllers/userController");
var realUserController = require("./controllers/realUserController");

//Express request pipeline
app.use(express.static(path.join(__dirname, "../app/dist")));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json())

app.use("/api", userController);
app.use("/api", realUserController);


// Connect to mongodb database
var resourceUrl ="mongodb://kajsa:hermione@ds031531.mlab.com:31531/smugface";

mongoose.connect(resourceUrl, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + resourceUrl + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + resourceUrl);
  }
});


app.listen(port, function () {
  console.log('Example app listening on port', port);
});








