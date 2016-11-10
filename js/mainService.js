angular.module("assessment")
  .service("mainService", function($http){

    this.getPets = function(){
      return $http.get("http://practiceapi.devmounta.in/pets");
    };
    this.getPetInfo = function(id){
      return $http.get("http://practiceapi.devmounta.in/pets/" + id);
    };

  });
