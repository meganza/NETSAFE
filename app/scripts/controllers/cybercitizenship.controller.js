angular.module('Netsafe').controller('cybercitizenshipController', function($scope) {
	console.log('you are in cybercitizenshipController');

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.cyberCitizenshipVid = 'https://www.youtube.com/watch?v=Xp4tWIy5rnc';

  // how to target a single video ?
  // keeps pausing
  $scope.$on('youtube.player.playing', function($event, player){
    setTimeout($scope.pauseVideo = function(){
                player.pauseVideo();
              }, 3000);
    // setTimeout($scope.pauseVideo = function(){
    //             player.pauseVideo();
    //           }, 6000);
  });
});
