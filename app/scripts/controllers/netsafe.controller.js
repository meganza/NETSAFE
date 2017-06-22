angular.module('Netsafe').controller('netsafeController', function($scope) {
	console.log('you are in netsafe controller');

	$scope.clicked = false;
  $scope.clickedTool = false;

	$scope.toggleSidebar = function() {
		$('#sidebar').toggle();
	};

  $scope.clickToolTip = function(){
    $scope.clickedTool = !$scope.clickedTool;
  };

	$scope.clickHelp = function(){
		$scope.clicked = !$scope.clicked;
	};
	$scope.toggleSidebar();

});
