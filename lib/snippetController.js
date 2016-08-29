var Snippet = require('./snippetModel.js');


module.exports = {
  
  getAll: function(req, res, next) {

    Snippet.find().exec()
      .then(function(results) {
        if (results) {
          console.log('Returning all snippets:  ', results);
          res.status(200).send(results);
        }
      })
      .catch(function(err) {
        next(err);
      });

  },

  addOne: function(req, res, next) {

    new Snippet({
      snippet: req.body.snippet,
      username: req.body.username,
      title: req.body.title
    })
    .save()
    .then(function(result) {
      if (result) {
        console.log('Successfully saved one snippet:  ', result);
        res.status(200).send(result);
      }
    })
    .catch(function(err) {
      next(err);
    });

  }
};