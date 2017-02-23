var app = angular.module('madLibs');

app.factory('factory', function(){

var libsInfo = {};

return {

 sendInfo: function(libsData){
 console.log(libsData);
 libsInfo = libsData;
 },
  grabInfo: function(){
    return libsInfo;
      }
    }
});
