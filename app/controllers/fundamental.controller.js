angular.module('Netsafe').controller('fundamentalController', function($scope) {
	console.log('you are in fundamentalController');

	$scope.showTab = function(id){
    $(".tab").removeClass("active");
    $(".tab-content").hide();

    $("#tab-"+ id).addClass("active");
    $("#tab-content-" + id).show();
	};

  $scope.showTab(1);
  $(".CYO-video").hide();

  $scope.showCYOVid = function(id){
    $(".CYO-video").hide();
    $("#CYO-video-" + id).show();
  }

});
