angular.module('Netsafe').controller('netiquetteController', function($scope) {
	console.log('you are in netiquetteController');

  if($scope.clickedTool){
    $scope.clickedTool = !$scope.clickedTool;
  }

  if($scope.clicked){
    $scope.clicked = !$scope.clicked;
  }

});
