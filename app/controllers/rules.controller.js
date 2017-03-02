angular.module('Netsafe').controller('rulesController', function($scope) {
	console.log('you are in rulesController');

  $scope.answerClicked = false;

	$(document).ready(function(){
  		$('.carousel').slick({
  			dots: true,
  		});
	});

});
