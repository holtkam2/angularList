// require app, mongoose
var app = require('./server/server.js');

// set port
var port = 1337;

// listen on port
app.listen(port);

console.log("Server is listening on port " + port);

