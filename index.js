var express = require('express');
//var partials = require('express-partials');
var bodyParser = require('body-parser');
var snippetController = require('./lib/snippetController');
var mongoose = require('mongoose');
var morgan = require('morgan');
var helpers = require('./lib/helpers');

var port = 5000;

app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/data/snippets', snippetController.getAll);
app.post('/data/snippets', snippetController.addOne);

app.use(helpers.errorLogger);
app.use(helpers.errorHandler);



app.listen(port);
console.log('Server now listening on port ' + port);