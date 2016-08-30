// The view controller for the code snippet!
//Passing along processing of code to the factory when form is submitted
//And initializing the code view

angular.module('pSandbox.code', [])

.controller('CodeController', function($scope, $window, $location, Code, Snippets) {

  //Initialize the scope variables here
  $scope.snippets = {
    vals: [],
    selected: undefined,
    save: false
  };

  //Call the service for executing the promise code
  $scope.submit = function() {

    console.log('Running your code!\n', $scope.myCodeMirror.getValue() );
    Code.runCode($scope.myCodeMirror.getValue());
    
  }; 


  $scope.getSnippets = function() {
    var results = Snippets.getAll().then(function(results) {
      console.log('Grabbing snippets was a success\n');
      $scope.snippets.vals = results;
    });

  }; 

  $scope.updateEditor = function(text) {
    $scope.myCodeMirror.setValue(text);
  };



  $scope.save = function() {
    if ($scope.form && $scope.form.username && $scope.form.title) {
      $scope.snippets.save = false;

      var newEntry = { 
        username: $scope.form.username,
        title: $scope.form.title,
        snippet: $scope.myCodeMirror.getValue()
      };

      Snippets.addOne(JSON.stringify(newEntry)).then(function(res) {
        console.log('Respose OK: ', res);
        //Do something interesting here like add a check symbol to show save success
      });

    } else {
      $scope.snippets.save = true;
    }

  };


  $scope.getSnippets();

});
