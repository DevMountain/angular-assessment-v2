angular.module("assessment")
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home",{
        url: "/",
        templateUrl: "../views/home.html"
      })
      .state("about",{
        url: "/about",
        templateUrl: "../views/about.html"
      })
      .state("blog",{
        url: "/blog",
        templateUrl: "../views/blog.html"
      })
      .state("pets",{
        url: "/pets",
        templateUrl: "../views/pets.html"
      })
      .state("pet-bio", {
        url: "/bio/:id",
        templateUrl: "../views/pet-bio.html",
        controller: function(mainService, $stateParams, $scope){
          mainService.getPetInfo($stateParams.id).then(function(res){
             $scope.vm = {
               pet: res.data
             };
           });
        }
      });
  });
