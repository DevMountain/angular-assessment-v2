angular.module("assessment")
  .controller("mainCtrl", function($scope, $stateParams, mainService){
    mainService.getPets().then(function(res){
      $scope.pets = res.data;

    });

    $scope.showImage = false;
    $scope.seePet = function(){
      $scope.showImage = !$scope.showImage;
    };



  });
