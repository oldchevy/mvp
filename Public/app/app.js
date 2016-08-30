angular.module('pSandbox', [
  'pSandbox.utils',
  'pSandbox.services',
  'pSandbox.code',
  'pSandbox.save',
  //'pSandbox.about',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/code', {
      templateUrl: 'app/code/editor.html',
      controller: 'CodeController',
    })
    .when('/save', {
      templateUrl: 'app/save/form.html',
      controller: 'SaveController'
    })
    .when('/about', {
      templateUrl: 'app/about/about.html',
      controller: 'AboutController'
    });

  //This will be used if at some point we decide to create users and authentication
  // $httpProvider.interceptors.push('AttachTokens');
})
.directive('append', function() {
  return {
    link: function($scope, element, attrs) {
      console.log(element);
      var initial = ['///////////////////////          SANDBOX         ////////////////////////////////',
                     '// Enter your Promise snippet here. No need to wrap it in a function or anything,',
                     '// whatever you submit will be executed! Check out the Getting Started tab for',
                     '// usage basics, and take a look at the examples on the right.'].join('\n');

      //console.log(elem);
      $scope.myCodeMirror = CodeMirror(element[0], {
        value: initial + '\n\n\n\n\n\n',
        mode: 'javascript',
        lineNumbers: true,
        tabSize: 2
      });
    }
  };
});