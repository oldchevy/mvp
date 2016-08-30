angular.module('pSandbox.services', [])

.factory('Snippets', function ($http) {
  var addOne = function(data) {
    return $http({
      method: 'POST',
      url: '/data/snippets',
      data: data // {username: snippet: title:} JSON FORMATTED
    });
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/data/snippets'
    }).then(function(res) {
      return res.data;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})
.factory('Code', function ($http, $location, $window) {

  var runCode = function(code) {
    //Figure out how to run the code!!

  }; 

  return {
    runCode: runCode,
  };
});