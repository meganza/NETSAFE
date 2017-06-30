angular.module('Netsafe').controller('techniquesController', function($scope) {
  console.log('you are in techniquesController');

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.identityVid = 'https://www.youtube.com/watch?v=qguDRN2jxGs';
  $scope.spamVid = 'https://www.youtube.com/watch?v=tqTP-CI0yLM';
  $scope.phishingVid = 'https://www.youtube.com/watch?v=Dqcv_fHhuCY';
  $scope.pharmingVid = 'https://www.youtube.com/watch?v=S3-GvYfb2cI';
  $scope.rogueVid = 'https://www.youtube.com/watch?v=E4BaYDaJiJ0';

  var pauseCount = 0;

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(player.getVideoData().video_id); // get the video id of the playing video

    if(player.getVideoData().video_id == "qguDRN2jxGs"){
      console.log("hello, identity theft vid is playing");
    } else if (player.getVideoData().video_id == "tqTP-CI0yLM"){
      console.log("hello, spam vid is playing");
    } else if (player.getVideoData().video_id == "Dqcv_fHhuCY"){
      console.log("hello, phishing vid is playing");
    } else if (player.getVideoData().video_id == "S3-GvYfb2cI"){
      console.log("hello, pharming vid is playing");
    } else {
      console.log("hello, rogue vid is playing");
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
