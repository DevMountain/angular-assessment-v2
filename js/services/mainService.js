angular.module("assessment").service("mainService", function($http) {

  var address = 'http://practiceapi.devmounta.in/pets';

  this.getPets = function() {
    return $http({
			method: 'GET',
			url: address
		});
  };

  this.getPet = function(petid) {
    return $http({
      method: 'GET',
      url: address + "/" + petid
    });
  };



});
