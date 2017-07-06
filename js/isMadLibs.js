
var app = angular.module('madLibs');

app.factory('ismadLibsFactory', function($scope){

}
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
