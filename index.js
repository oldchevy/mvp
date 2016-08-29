var app = require('express')();
var partials = require('express-partials');
var bodyParser = require('body-parser');
var handler = require('./lib/handler');
var mongoose = require('mongoose');

var port = 5000;

app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));




console.log('Server now listening on port ' + port);