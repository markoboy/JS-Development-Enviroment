/** Development Web Server Configurations */
var express = require('express');
var path = require('path');
var open = require('open');

// The port that the webserver will listen
var port = 3000;
// Create an instance of express
var app = express();

// Set up the routes that express will handle
app.get('/', function(request, response) {
  // The root will response with the index.html file of our project
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

// Set express to listen to the port
app.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});
