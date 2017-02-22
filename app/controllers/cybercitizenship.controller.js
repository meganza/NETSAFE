angular.module('Netsafe').controller('cybercitizenshipController', function($scope) {
	console.log('you are in cybercitizenshipController');

	$scope.clicked = false;

	$scope.clickHelp = function(){
		$scope.clicked = !$scope.clicked;
	}


});