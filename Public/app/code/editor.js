// The view controller for the code snippet!
//Passing along processing of code to the factory when form is submitted
//And initializing the code view

angular.module('pSandbox.code', [])

.controller('CodeController', function($scope, $window, $location, Code, Snippets) {

  //Initialize the code editor here
  $scope.snippets = {
    vals: [],
    selected: undefined,
    save: false
  };
  var codeMirror = $scope.myCodeMirror;

  $scope.submit = function() {
    //call the service for executing the promise code

    console.log('This submit button is working!\n', $scope.myCodeMirror.getValue() );
    //How are we going to grab the code?
  }; 


  $scope.getSnippets = function() {
    //call the service for fetching the DB snippets
    var results = Snippets.getAll().then(function(results) {
      console.log('This refresh button is working!\n', results);
      $scope.snippets.vals = results;
    });

  }; 

  $scope.updateEditor = function(text) {
    $scope.myCodeMirror.setValue(text);
  };



  $scope.save = function() {
    if ($scope.form && $scope.form.username && $scope.form.title) {
      $scope.snippets.save = false;
      console.log('Save button is up and running:  ', $scope.form );

      var newEntry = { 
        username: $scope.form.username,
        title: $scope.form.title,
        snippet: $scope.myCodeMirror.getValue()
      };

      Snippets.addOne(JSON.stringify(newEntry)).then(function(res) {
        console.log(res);
      });

    } else {
      $scope.snippets.save = true;
    }

  };


  $scope.getSnippets();

});
