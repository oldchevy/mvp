db = require('./dbconfig');
mongoose = require('mongoose');

//Eventually, put model methods and lifecycle events with .pre here
// It is added to db.snippetSchema.methods

var Snippet = mongoose.model('User', db.snippetSchema);

module.exports = Snippet;