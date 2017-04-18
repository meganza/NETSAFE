angular.module('Netsafe').controller('definitionController', function($scope) {
  console.log('you are in definitionController');

  $(".Def-video").hide();

  $scope.showDefVid = function(id){
    $(".Def-video").hide();
    $("#Def-video-" + id).show();
  }

});
