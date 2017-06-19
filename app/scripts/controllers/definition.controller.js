angular.module('Netsafe').controller('definitionController', function($scope) {
  console.log('you are in definitionController');

  $scope.definitionVid = 'https://www.youtube.com/watch?v=78BTES4Fyro';

  $(".Def-video").hide();

  $scope.showDefVid = function(id){
    $(".Def-video").hide();
    $("#Def-video-" + id).show();
  };

});
