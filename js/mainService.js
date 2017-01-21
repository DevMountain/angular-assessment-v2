angular.module('assessment').service('mainService', function($http){

  this.getPets = function() {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/pets'
    }).then(function(response){
      return response;
    });
  };

  this.getBio = function(id) {
    console.log(id);
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/pets/'+id
    }).then(function(response){
      return response;
    });
  };

});
