angular.module('Netsafe').controller('fundamentalController', function($scope) {
	console.log('you are in fundamentalController');

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.digitalTattooVid = 'https://www.youtube.com/watch?v=L_zB8iqDNxY'; // done or revised
  $scope.internetPrivacyVid = 'https://www.youtube.com/watch?v=2Ctc_3Nv2ME';  // done or revised
  $scope.respectingOthersVid = 'https://www.youtube.com/watch?v=Wx1IU7EtgwE'; // done or revised

  var pauseCount = 0;

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(player.getVideoData().video_id); // get the video id of the playing video
    if(player.getVideoData().video_id == "L_zB8iqDNxY"){        // digital tattoo
      console.log("hello, internet privacy vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 21650);   // pauses at 0:23
        pauseCount++;
      } else if (pauseCount == 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 24000);   // 0:46
        pauseCount++;
      } else if (pauseCount == 2){ // third pause count
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 21500);   // 1:08
        pauseCount++;
      } else if (pauseCount == 3){ // fourth pause count
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 10000);   // 1:19
        pauseCount++;
      } else if (pauseCount == 4){ // fifth pause count
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 12500);   // 1:34
        pauseCount++;
      }

    } else if (player.getVideoData().video_id == "2Ctc_3Nv2ME"){   // internet privacy
      console.log("hello, internet privacy vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 3000);   // pauses at 0:02
        pauseCount++;
      } else if (pauseCount == 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 12000);   // 0:14
        pauseCount++;
      } else if (pauseCount == 2){ // third pause count
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 24000);   // 0:38
        pauseCount++;
      } else if (pauseCount == 3){ // fourth pause count
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 18000);   // 0:56
        pauseCount++;
      } else if (pauseCount == 4){ // fifth pause count
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 13000);   // 1:10
        pauseCount++;
      }
    } else {                                                        // respecting others
      console.log("hello, respecting others  vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 16500);   // pauses at 0:16
        pauseCount++;
      } else if (pauseCount == 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 14500);   // 0:31
        pauseCount++;
      }
    }

    // problem: its not at a SPECIFIC time, pause @ ___ seconds, play, pauses @ ___ seconds
    // if the pause is by the teacher, then it will work up everything
    console.log(pauseCount);
  });

  // puts pauseCount counter back to 0
  $scope.$on('youtube.player.ended', function($event, player){
    pauseCount = 0;
    console.log(pauseCount);
  });

	$scope.showTab = function(id){
    pauseCount = 0;

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
    pauseCount = 0;

    $(".CYO-video").hide();
    $("#CYO-video-" + id).show();

    $(".cyo-btn").removeClass("active");
    $("#cyo-btn-" + id).addClass("active");
  };

});
