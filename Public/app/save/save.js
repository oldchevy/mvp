angular.module('pSandbox.save', [])

.controller('SaveController', function($scope, $window, $location, Snippets) {

  //Initialize the code editor here
  $scope.snippets = {};

  $scope.getSnippets = function() {
    //call the service for executing the promise code
    var results = Snippets.getAll().then(function(results) {
      console.log('This refresh button is working!\n', results);
    });

  }; 

  $scope.updateEditor = function() {

  };

});