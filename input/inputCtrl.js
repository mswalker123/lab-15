var app = angular.module('madLibs');
app.controller('inputCtrl', function($scope, factory, $location){

  $scope.grabInfo = function(libs){
    console.log(libs);

    factory.sendInfo(libs);
    $location.path('/output');

  };
});
