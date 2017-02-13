angular.module('assessment')
.controller('bioCtrl', function($scope, $state, mainService, $stateParams) {

  $scope.petid = $stateParams.id;

  $scope.getPet = function() {
    mainService.getPet($stateParams.id).then(function(response) {
      // console.log(response.data);
      $scope.pet = response.data;
    })
  }

  $scope.getPet();


})
