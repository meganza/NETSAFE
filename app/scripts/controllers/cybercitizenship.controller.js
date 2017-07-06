angular.module('Netsafe').controller('cybercitizenshipController', function($scope) {
	console.log('you are in cybercitizenshipController');

  var pauseCount = 0;

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.cyberCitizenshipVid = 'https://www.youtube.com/watch?v=7kLr6tZDFRo';

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(pauseCount);

    if (pauseCount == 0){ // pause at first pause time
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 15000);   // 0:14
      pauseCount++;
    } else if (pauseCount == 1){ // second pause time
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 8800);   // 0:23
      pauseCount++;
    }

    // problem: its not at a SPECIFIC time, pause @ ___ seconds, play, pauses @ ___ seconds
    // if the pause is by the teacher, then it will work up everything
    console.log(pauseCount);
  });

  $scope.$on('youtube.player.ended', function($event, player){
    pauseCount = 0;
    console.log(pauseCount);
  });

});
