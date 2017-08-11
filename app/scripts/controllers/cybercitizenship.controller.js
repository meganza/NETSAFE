angular.module('Netsafe').controller('cybercitizenshipController', function($scope, $rootScope) {
	console.log('you are in cybercitizenshipController');

  if($scope.clickedTool){
    $scope.clickedTool = !$scope.clickedTool;
  }

  if($scope.clicked){
    $scope.clicked = !$scope.clicked;
  }

  $scope.ppdVal = $rootScope.predefinedPauses;
  var pauseCount = 0;

  $scope.suggested = [
    "Suggested Discussion: Explain that Cyber citizenship equates to Digital citizenship which also equates to how netizens present themselves and interact with others online",
    "Suggested Discussion: Emphasize that there are do’s and don’ts on the internet",
    "Suggested Discussion: State that these are some things on the Good Netizen to-do list"
  ];

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.cyberCitizenshipVid = 'https://www.youtube.com/watch?v=7kLr6tZDFRo';

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(pauseCount);

    if($scope.ppdVal){
      if (pauseCount === 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 15000);   // 0:14
        pauseCount++;
      } else if (pauseCount === 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 8800);   // 0:23
        pauseCount++;
      }
      $('#suggestedDiscussion').text($scope.suggested[pauseCount-1]);
    }
    console.log(pauseCount);
  });

  $scope.$on('youtube.player.ended', function($event, player){
    if($scope.ppdVal){
      pauseCount = 0;
      console.log(pauseCount);
    }
  });

});

