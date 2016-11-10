angular.module("assessment")
  .directive("petDirective", function(){
    return {
      templateUrl: "/views/pet-tmpl.html",
      scope: {
        pet: "="
      },
      controller: "mainCtrl"
      
    }; // ends return statement
  }); //ends directive
