angular.module('Netsafe').controller('cybercitizenshipController', function($scope) {
	console.log('you are in cybercitizenshipController');

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.cyberCitizenshipVid = 'https://www.youtube.com/watch?v=Xp4tWIy5rnc';

  // how to target a single video ?
  $scope.$on('youtube.player.playing', function($event, player){
    // pauses AFTER 3 SECONDS after EACH play/pause

    // setTimeout($scope.pauseVideo = function(){
    //             player.pauseVideo();
    //           }, 3000);

    // var time = player.getCurrentTime();
    // console.log(time);

    // if(time < 4500){
    //   var rate = player.getPlaybackRate();
    //   var remainingTime = (4500 - time) / rate;
    //   setTimeout($scope.pauseVideo = function(){
    //             player.pauseVideo();
    //           }, remainingTime * 1000);
    // }


  });



});
