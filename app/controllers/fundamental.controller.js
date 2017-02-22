angular.module('Netsafe').controller('fundamentalController', function($scope) {
	console.log('you are in fundamentalController');

	$scope.ready = function(){
		$('#conducting a').click(function(e){
			e.preventDefault();
			$(this).tab('show');
		});
	};

	$scope.ready = function(){
		$('#respecting a').click(function(e){
			e.preventDefault();
			$(this).tab('show');
		});
	};

});