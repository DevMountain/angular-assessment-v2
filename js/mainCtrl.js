angular.module('assessment')
.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', function($scope, mainService, $stateParams){

  mainService.getPets().then(function(response){
    $scope.pets = response.data;
    // console.log($scope.pets);
  });

  if($stateParams){
    mainService.getBio($stateParams.id).then(function(response){
      console.log($stateParams.id);
      $scope.bio = response.data;
      console.log($scope.bio);
    });
  };

}])
.directive('canines', function(){
  return {
    restrict: 'AE',
    scope: {
      dog: '='
    },
    templateUrl: './views/pet-tmpl.html'
  };
});
