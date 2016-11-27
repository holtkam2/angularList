// require express
var express = require('express');

// start express
var app = express();

app.use(express.static(`${__dirname}/../client`));

// export app
module.exports = app;





