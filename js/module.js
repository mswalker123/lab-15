var app = angular.module('madLibs', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/input',{
    controller:'inputCtrl',
    templateUrl:'input/input.html'
  })
  .when('/output',{
    controller:'outputCtrl',
    templateUrl:'output/output.html'
  })
  .otherwise({ redirectTo: '/'});
  $locationProvider.hashPrefix('');
  });
