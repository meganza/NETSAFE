angular.module('Netsafe').controller('definitionController', function($scope, $rootScope) {
  console.log('you are in definitionController');
  $scope.ppdVal = $rootScope.predefinedPauses;

  if($scope.clickedTool){
    $scope.clickedTool = !$scope.clickedTool;
  }

  if($scope.clicked){
    $scope.clicked = !$scope.clicked;
  }

  $scope.suggested = [
    "Suggested Discussion: Reveal that there are elements not present when interacting online compared to interacting in real life. Illustrate that these elements not being present could lead to misunderstandings then blow up to moral, legal, and social issues if guidelines, or netiquette, are not followed.",
    "Suggested Discussion: Elaborate on how netiquette tackles the moral, legal and social issues, and uses ethics to resolve them to better the netizen experience.",
    "Suggested Discussion: Reiterate that netiquette helps netizens understand other people better and at the same time helps them understand the virtual environment they are in.",
    "Suggested Discussion: Point out that for Remember The Human, it’s best to always remember that the person you’re talking to behind the screen is also a human being and has feelings, too."
  ];

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.definitionVid = 'https://www.youtube.com/watch?v=jPvSyasAusU';

  $(".Def-video").hide();

  var pauseCount = 0;

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(pauseCount);

    if($scope.ppdVal){
      if (pauseCount === 0){ // pause at first pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 28500);   // 0:28
        pauseCount++;
      } else if (pauseCount === 1){ // second pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 14500);   // 0:43
        pauseCount++;
      } else if (pauseCount === 2){ // third pause time
        setTimeout($scope.pauseVideo = function(){
                    player.pauseVideo();
                  }, 18000);   // 1:01, 61
        pauseCount++;
      }
      $('#suggestedDiscussion').text($scope.suggested[pauseCount-1]);
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
