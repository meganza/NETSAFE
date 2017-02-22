angular.module('Netsafe').controller('netsafeController', function($scope) {
	console.log('you are in netsafe controller');

	$scope.clicked = false;

	$scope.toggleSidebar = function() {
		$('#sidebar').toggle();
	};

	$scope.clickHelp = function(){
		$scope.clicked = !$scope.clicked;
	}


	$scope.toggleSidebar();
});