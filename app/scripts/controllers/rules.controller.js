angular.module('Netsafe').controller('rulesController', function($scope, $timeout) {
	console.log('you are in rulesController');

  $timeout(function() {
    $('.carousel').slick({
      dots: true,
    });
  }, 1);

});
