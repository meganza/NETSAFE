angular.module('Netsafe').controller('definitionController', function($scope) {
  console.log('you are in definitionController');

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.definitionVid = 'https://www.youtube.com/watch?v=jPvSyasAusU';

  $(".Def-video").hide();

  var pauseCount = 0;

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(pauseCount);

    if (pauseCount == 0){ // pause at first pause time
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 28500);   // 0:28
      pauseCount++;
    } else if (pauseCount == 1){ // second pause time
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 14500);   // 0:43
      pauseCount++;
    } else if (pauseCount == 2){ // third pause time
      setTimeout($scope.pauseVideo = function(){
                  player.pauseVideo();
                }, 18000);   // 1:01, 61
      pauseCount++;
    }

    // problem: its not at a SPECIFIC time, pause @ ___ seconds, play, pauses @ ___ seconds
    // if the pause is by the teacher, then it will work up everything
    console.log(pauseCount);
  });

  $scope.showDefVid = function(id){
    $(".Def-video").hide();
    $("#Def-video-" + id).show();
  };

});
