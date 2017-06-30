angular.module('Netsafe').controller('cybercitizenshipController', function($scope) {
	console.log('you are in cybercitizenshipController');

  var pauseCount = 0;

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.cyberCitizenshipVid = 'https://www.youtube.com/watch?v=Xp4tWIy5rnc';

  // how to target a single video ?
  $scope.$on('youtube.player.playing', function($event, player){
    console.log(pauseCount);

    if (pauseCount == 0){
      // pause at first pause time
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 3000);   // pauses at 0:02 [0, 1, 2]
      pauseCount++;
    } else if (pauseCount == 1){
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 6000);   // pauses at 0:08 [3, 4, 5, 6, 7, 8]
      // second pause time
      pauseCount++;
    } else if (pauseCount == 2){
      // third pause count
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 2000);   // pauses at 0:08 [9, 10]
      // if last,
      pauseCount = 10;
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
