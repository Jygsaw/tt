// initialize variables
var port = process.argv[2];
var http = require('http');

// start server
http.createServer(function (req, res) {
  res.end('helo');
}).listen(port, function() {
  console.log("Server listening on port", port);
});
