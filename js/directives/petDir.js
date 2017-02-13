angular.module("assessment")
.directive('petDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './views/pet-tmpl.html',
    controller: function($scope, mainService, $state, $rootScope) {

      $(document).ready(function() {
        $("#"+$scope.pet.id).click(function() {
          var clicks = $(this).data("clicks");
          if (clicks) {
            // odd clicks
            $(".image"+$scope.pet.id).css({
              "display":"block"
            });
            $(".showimage"+$scope.pet.id).css({
              "display":"none"
            });
          } else {
            // even clicks
            $(".image"+$scope.pet.id).css({
              "display":"none"
            });
            $(".showimage"+$scope.pet.id).css({
              "display":"block"
            });
          }
          $(this).data("clicks", !clicks);
        });
      });
    }
  }


});
