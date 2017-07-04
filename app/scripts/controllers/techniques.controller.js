angular.module('Netsafe').controller('techniquesController', function($scope) {
  console.log('you are in techniquesController');

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.identityVid = 'https://www.youtube.com/watch?v=3rLkVSBciVo'; // done or revised
  $scope.spamVid = 'https://www.youtube.com/watch?v=WgEfmudj-50'; // done or revised
  $scope.phishingVid = 'https://www.youtube.com/watch?v=Dqcv_fHhuCY'; // done or revised
  $scope.pharmingVid = 'https://www.youtube.com/watch?v=qnl7lD9QYik'; // done or revised
  $scope.rogueVid = 'https://www.youtube.com/watch?v=lRIknf-sQn0'; // done or revised
  $scope.preventionVid = 'https://www.youtube.com/watch?v=lRIknf-sQn0';

  var pauseCount = 0;

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(player.getVideoData().video_id); // get the video id of the playing video

    if(player.getVideoData().video_id == "3rLkVSBciVo"){          // identity theft video
      console.log("hello, identity theft vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 10000);   // 0:09
        pauseCount++;
      } else if (pauseCount == 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 19000);   // 0:28
        pauseCount++;
      } else if (pauseCount == 2){ // third pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 16000);   // 0:44
        pauseCount++;
      }
    } else if (player.getVideoData().video_id == "WgEfmudj-50"){  // spam video
      console.log("hello, spam vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 10500);   // 0:10
        pauseCount++;
      }
    } else if (player.getVideoData().video_id == "Dqcv_fHhuCY"){  // phishing video
      console.log("hello, phishing vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 19000);   // 0:18
        pauseCount++;
      } else if (pauseCount == 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 21800);   // 0:40
        pauseCount++;
      } else if (pauseCount == 2){ // third pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 9500);   // 0:50
        pauseCount++;
      }
    } else if (player.getVideoData().video_id == "qnl7lD9QYik"){  // pharming video
      console.log("hello, pharming vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 10000);   // 0:09
        pauseCount++;
      } else if (pauseCount == 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 10000);   // 0:19
        pauseCount++;
      } else if (pauseCount == 2){ // third pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 13000);   // 0:32
        pauseCount++;
      } else if (pauseCount == 3){ // fourth pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 15500);   // 0:48
        pauseCount++;
      }
    } else if (player.getVideoData().video_id == "lRIknf-sQn0"){  // rogue security software video playing
      console.log("hello, rogue vid is playing");
      if (pauseCount == 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 9000);   // 0:08
        pauseCount++;
      } else if (pauseCount == 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 11800);   // 0:20
        pauseCount++;
      }
    } else {                                                      // prevention video playing
      console.log("hello, prevention vid is playing");
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

});
