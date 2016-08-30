// The view controller for the code snippet!
//Passing along processing of code to the factory when form is submitted
//And initializing the code view

angular.module('pSandbox.code', [])

.controller('CodeController', function($scope, $window, $location, Code) {

  //Initialize the code editor here


  $scope.submit = function() {
    //call the service for executing the promise code

    console.log('This submit button is working!\n', $scope.myCodeMirror.getValue() );
    //How are we going to grab the code?
  }; 

});
