angular.module('Netsafe').controller('techniquesController', function($scope, $rootScope) {
  console.log('you are in techniquesController');

  if($scope.clickedTool){
    $scope.clickedTool = !$scope.clickedTool;
  }

  if($scope.clicked){
    $scope.clicked = !$scope.clicked;
  }

  $scope.ppdVal = $rootScope.predefinedPauses;

  $scope.suggestedIdentity = [
    "Suggested Discussion: Accentuate the gravity of identity theft by giving scenarios of fraud from recent news or from the past.",
    "Suggested Discussion: Remind them to be wary about the software they install on their computers and to always check if the software they download and the site they’re downloading from is credible. ",
    "Suggested Discussion: Give more examples of other ways identity theft could happen."
  ];

  $scope.suggestedSpam = [
    "Suggested Discussion: Explain what spam is. Give other reasons as to why people would spam other people. ",
    "Suggested Discussion: Mention recent incidents of viruses clinging onto emails to infect computers once they’re opened."
  ];

  $scope.suggestedPhishing = [
    "Suggested Discussion: Recount recent or past occurrences of phishing scams.",
    "Suggested Discussion: Remind them to stay protective over their credentials online. Advise them to use personal information protectors that often come with antiviruses.",
    "Suggested Discussion: Elaborate on other things they could do with the information they have once they’ve phish-ed you."
  ];

  $scope.suggestedPharming = [
    "Suggested Discussion: Differentiate phishing from pharming.",
    "Suggested Discussion: Caution them against using unsecure public wifi or using public wifi and saying yes to other people being able to access their files on the public wifi.",
    "Suggested Discussion: Mention that this part is similar to phishing. Remind the students to be vigilant. ",
    "Suggested Discussion: Remind them to always check if the website they’re logging on to is secure."
  ];

  $scope.suggestedRogue = [
    "Suggested Discussion: Explain that like how there are fake versions of products (i.e. Bucci instead of Gucci), there also fake versions of antiviruses and other security software.",
    "Suggested Discussion: Discuss other symptoms of rogue security software.",
    "Suggested Discussion: Remind the students to check if the security system they’re buying or installing is legitimate or not before buying or installing them"
  ];

  $scope.suggestedPrevention = [
    "Suggested Discussion: Caution them against opening suspicious emails and clicking on suspicious links. Illustrate the consequences of doing so.",
    "Suggested Discussion: Emphasize that checking for grammatical errors would be recommended here as it could be a sign of a scam. Inform them on how to differentiate ads from button in certain places of the internet. Remind them to be wary of unfamiliar extensions. Give examples of unfamiliar extensions. Caution them against failing to read the whole thing the installer says when installing something.",
    "Suggested Discussion: Advise them to always check the legitimacy of profiles they add on Facebook and to always only add people they know. Discuss that Stranger Danger applies online too."
  ];

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.identityVid = 'https://www.youtube.com/watch?v=3rLkVSBciVo'; // done or revised
  $scope.spamVid = 'https://www.youtube.com/watch?v=WgEfmudj-50'; // done or revised
  $scope.phishingVid = 'https://www.youtube.com/watch?v=Dqcv_fHhuCY'; // done or revised
  $scope.pharmingVid = 'https://www.youtube.com/watch?v=qnl7lD9QYik'; // done or revised
  $scope.rogueVid = 'https://www.youtube.com/watch?v=lRIknf-sQn0'; // done or revised
  $scope.preventionVid = 'https://www.youtube.com/watch?v=gQc0o1bxWqc'; // done or revised

  var pauseCount = 0;

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(player.getVideoData().video_id); // get the video id of the playing video

    if($scope.ppdVal){
      if(player.getVideoData().video_id === "3rLkVSBciVo"){          // identity theft video
        console.log("hello, identity theft vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 10000);   // 0:09
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 19000);   // 0:28
          pauseCount++;
        } else if (pauseCount === 2){ // third pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 16000);   // 0:44
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedIdentity[pauseCount-1]);
      } else if (player.getVideoData().video_id === "WgEfmudj-50"){  // spam video
        console.log("hello, spam vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 10500);   // 0:10
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedSpam[pauseCount-1]);
      } else if (player.getVideoData().video_id === "Dqcv_fHhuCY"){  // phishing video
        console.log("hello, phishing vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 19000);   // 0:18
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 21800);   // 0:40
          pauseCount++;
        } else if (pauseCount === 2){ // third pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 9500);   // 0:50
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedPhishing[pauseCount-1]);
      } else if (player.getVideoData().video_id === "qnl7lD9QYik"){  // pharming video
        console.log("hello, pharming vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 10000);   // 0:09
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 10000);   // 0:19
          pauseCount++;
        } else if (pauseCount === 2){ // third pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 13000);   // 0:32
          pauseCount++;
        } else if (pauseCount === 3){ // fourth pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 15500);   // 0:48
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedPharming[pauseCount-1]);
      } else if (player.getVideoData().video_id === "lRIknf-sQn0"){  // rogue security software video playing
        console.log("hello, rogue vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 9000);   // 0:08
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 11800);   // 0:20
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedRogue[pauseCount-1]);
      } else {                                                      // prevention video playing
        console.log("hello, prevention vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 42000);   // 0:41
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 55000);   // 1:36, 96
          pauseCount++;
        } else if (pauseCount === 2){ // third pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 28000);   // 2:04, 124
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedRogue[pauseCount-1]);
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

});
