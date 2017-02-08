angular.module('Netsafe').controller('netsafeController', function($scope) {
	console.log('you are in netsafe controller');

	$scope.toggleSidebar = function() {
		$('#sidebar').toggle();
	};


	$scope.toggleSidebar();
});