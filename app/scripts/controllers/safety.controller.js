angular.module('Netsafe').controller('safetyController', function($scope) {
	console.log('you are in safetyController');

  if($scope.clickedTool){
    $scope.clickedTool = !$scope.clickedTool;
  }

  if($scope.clicked){
    $scope.clicked = !$scope.clicked;
  }

});
