// The view controller for the code snippet!
//Passing along processing of code to the factory when form is submitted
//And initializing the code view

angular.module('pSandbox.code', [])

.controller('CodeController', function($scope, $window, $location, Code, Snippets) {

  //Initialize the code editor here
  $scope.snippets = {
    vals: []
  };


  $scope.submit = function() {
    //call the service for executing the promise code

    console.log('This submit button is working!\n', $scope.myCodeMirror.getValue() );
    //How are we going to grab the code?
  }; 


  $scope.getSnippets = function() {
    //call the service for executing the promise code
    var results = Snippets.getAll().then(function(results) {
      console.log('This refresh button is working!\n', results);
      $scope.snippets.vals = results;
    });

  }; 

  $scope.updateEditor = function() {

  };


  $scope.getSnippets();
  
});
