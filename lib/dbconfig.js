var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');
var db2 = mongoose.connection;

db2.on('error', console.error.bind(console, 'connection error:'));
db2.once('open', console.log.bind(console, ('Weve connected to our DB!!')));

var snippetSchema = new mongoose.Schema({
  id: {type: Number,
       index: true},
  snippet: String,
  username: {
    type: String,
    default: 'Anonymous'
  },
  title: String,
  timestamps: {
    type: Date,
    default: Date.now
  }
});

module.exports.snippetSchema = snippetSchema;