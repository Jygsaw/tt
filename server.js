// initialize variables
var port = process.argv[2] || 8080;
var express = require('express');
var app = express();

// define routes
app.get('/', function (req, res) {
  res.send('helo');
});

// start server
app.listen(port, function () {
  console.log("Server listening on port", port);
});
