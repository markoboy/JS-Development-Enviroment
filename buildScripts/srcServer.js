/** Development Web Server Configurations */
import express from 'express';
import path from 'path';
import open from 'open';

// The port that the webserver will listen
const port = 3000;
// Create an instance of express
const app = express();

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
