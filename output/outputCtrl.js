var app = angular.module('madLibs');

app.controller('outputCtrl', function ($scope, factory){

  $scope.libs = factory.grabInfo();
  console.log($scope.libs);
});
