angular.module('Netsafe').controller('fundamentalController', function($scope) {
	console.log('you are in fundamentalController');

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.digitalTattooVid = 'https://www.youtube.com/watch?v=lljOiBv4V6w';
  $scope.internetPrivacyVid = 'https://www.youtube.com/watch?v=AsidPDo6icM';
  $scope.respectingOthersVid = 'https://www.youtube.com/watch?v=H0TQIJdJw_U';


	$scope.showTab = function(id){
    $(".tab").removeClass("active");
    $(".tab-content").hide();

    $("#tab-"+ id).addClass("active");
    $("#tab-content-" + id).show();
	};

  $scope.showTab(1);
  $(".CYO-video").hide();

  $("#CYO-video-1").show();
  $("#cyo-btn-1").addClass("active");

  $scope.showCYOVid = function(id){
    $(".CYO-video").hide();
    $("#CYO-video-" + id).show();

    $(".cyo-btn").removeClass("active");
    $("#cyo-btn-" + id).addClass("active");
  };

});
