angular.module('assessment')
.controller('petsCtrl', function($scope, mainService, $stateParams) {

  $scope.getPets = function() {
    mainService.getPets().then(function(response) {
      // console.log($stateParams.id);
      $scope.pets = response.data;
    })
  }

  $scope.getPets();


})
