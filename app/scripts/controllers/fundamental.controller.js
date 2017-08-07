angular.module('Netsafe').controller('fundamentalController', function($scope, $rootScope) {
	console.log('you are in fundamentalController');
  $scope.ppdVal = $rootScope.predefinedPauses;

  $scope.suggestedDT = [
    "Suggested Discussion: Discuss the consequences of posting online.",
    "Suggested Discussion: Notify the students to consider what their posts look like from an outer perspective.",
    "Suggested Discussion: Stress that a post is forever and dangerous because a post could be cloned, immortalized, and haunt you when you thought you’ve deleted it.",
    "Suggested Discussion: Caution them against sharing personal information online.",
    "Suggested Discussion: Inform them to  also be mindful about what their friends share about them online.",
    "Suggested Discussion: Remind them to think about what their bosses in the future, their teacher/s, or their parents might think after seeing what they’ve posted."
  ];

  $scope.suggestedIP = [
    "Suggested Discussion: Elaborate on internet privacy. You could also mention this fun fact: Internet privacy is a subset of data privacy which the Philippines has made laws for back in 2012 (Republic Act No. 10173)",
    "Suggested Discussion: Advise that changing your password every once in a while is a good practice, like what MLS makes us do after a time.",
    "Suggested Discussion: Prompt the students to be vigilant about your personal information as you would be about your personal belongings in real life.",
    "Suggested Discussion: Remind them that not everyone on the internet is nice.",
    "Suggested Discussion: Stress that it is always best to have antiviruses and firewalls up in your system. Advise them to stay vigilant.",
  ];

  $scope.suggestedRO = [
    "Suggested Discussion: Emphasize that online or real life, everyone deserves respect.",
    "Suggested Discussion: Indicate that regardless of a person’s beliefs, we should always see them as people, even if we can’t actually see them online.",
    "Suggested Discussion: Highlight always being respectful of others even if you don’t agree with them."
  ];

  $scope.playerVars = {
    controls: 1,
    rel: 0
  };

  $scope.digitalTattooVid = 'https://www.youtube.com/watch?v=Yf1UC1vVhwc'; // done or revised
  $scope.internetPrivacyVid = 'https://www.youtube.com/watch?v=2Ctc_3Nv2ME';  // done or revised
  $scope.respectingOthersVid = 'https://www.youtube.com/watch?v=Wx1IU7EtgwE'; // done or revised

  var pauseCount = 0;

  $scope.$on('youtube.player.playing', function($event, player){
    console.log(player.getVideoData().video_id); // get the video id of the playing video

    if($scope.ppdVal){
      if(player.getVideoData().video_id === "Yf1UC1vVhwc"){        // digital tattoo
        console.log("hello, internet privacy vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 21650);   // pauses at 0:23
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 24000);   // 0:46
          pauseCount++;
        } else if (pauseCount === 2){ // third pause count
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 21500);   // 1:08
          pauseCount++;
        } else if (pauseCount === 3){ // fourth pause count
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 10000);   // 1:19
          pauseCount++;
        } else if (pauseCount === 4){ // fifth pause count
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 12500);   // 1:34
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedDT[pauseCount-1]);
      } else if (player.getVideoData().video_id === "2Ctc_3Nv2ME"){   // internet privacy
        console.log("hello, internet privacy vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 3000);   // pauses at 0:02
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 12000);   // 0:14
          pauseCount++;
        } else if (pauseCount === 2){ // third pause count
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 24000);   // 0:38
          pauseCount++;
        } else if (pauseCount === 3){ // fourth pause count
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 18000);   // 0:56
          pauseCount++;
        } else if (pauseCount === 4){ // fifth pause count
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 13000);   // 1:10
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedIP[pauseCount-1]);
      } else {                                                        // respecting others
        console.log("hello, respecting others  vid is playing");
        if (pauseCount === 0){ // pause at first pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 16500);   // pauses at 0:16
          pauseCount++;
        } else if (pauseCount === 1){ // second pause time
          setTimeout($scope.pauseVideo = function(){
                      player.pauseVideo();
                    }, 14500);   // 0:31
          pauseCount++;
        }
        $('#suggestedDiscussion').text($scope.suggestedRO[pauseCount-1]);
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

	$scope.showTab = function(id){
    $('#suggestedDiscussion').text("Suggested Discussion");
    pauseCount = 0;

    $(".tab").removeClass("active");
    $(".tab-content").hide();

    $("#tab-"+ id).addClass("active");
    $("#tab-content-" + id).show();
	};

  $scope.showTab(1);
  $(".CYO-video").hide();

  $("#CYO-video-1").show();
  $("#cyo-btn-1").addClass("active");

  $scope.showCYOVid = function(id){
    $('#suggestedDiscussion').text("Suggested Discussion");
    pauseCount = 0;

    $(".CYO-video").hide();
    $("#CYO-video-" + id).show();

    $(".cyo-btn").removeClass("active");
    $("#cyo-btn-" + id).addClass("active");
  };

  var prevID = 0;

  $scope.showHelpTab = function(id){
    if(prevID === id){
      $(".malwr-help-btn").removeClass("active");
      $scope.showHelpTab(10);

      prevID = 0;
    } else {
      $(".malwr-help-btn").removeClass("active");
      $(".tab-help-content").hide();

      $("#malwr-help-btn-"+ id).addClass("active");
      $("#tab-help-content-" + id).show();

      prevID = id;
    }
  };

  $scope.showHelpTab(1);

});
