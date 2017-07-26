angular.module('Netsafe').controller('netivityController',
  function($scope, $timeout, ScenariosFactory) {
  $scope.scenarios = ScenariosFactory;

  $(".activity-alert").hide();
  $(".answer-modal").hide();

  $scope.answers = [null, null, null, null, null, null, null];
  $scope.correctAnswers = [2, 0, 3, 3, 0, 1, 3];

  $timeout(function() {
    $scope.currentScenario = 0;
  }, 1);

  $scope.showScenario = function(index) {
    // $(".button-num").removeClass("active");
    // $("#button-num-"+ index).addClass("active");
    $scope.currentScenario = index;
    $scope.answers = [null, null, null, null, null, null, null];

    $(".answer-modal").hide();
  };

  $scope.checkAnswer = function(){
    for(var i = $scope.correctAnswers.length; i--;) {
      if($scope.correctAnswers[i] === $scope.answers[i])
        $scope.correct = true;
      else {
        i = 0;
        $scope.correct = false;
      }
    }

    if($scope.correct){
      $('.checkCorrect').show();
    } else {
      $('.checkWrong').show();
    }
  };

  $scope.checkDivisionAnswer = function(){
    //fill up
  };

  $scope.checkFinalAnswer = function(){
    //fill up
  };

  $scope.checkNegatedAnswer = function(){
    //fill up
  };


  $scope.elements = [
    { value: 1,
      name: 'Digital Tattoo'
    }, {
      value: 2,
      name: 'Respecting Others Online'
    }, {
      value: 3,
      name: 'Remember the Human'
    }, {
      value: 4,
      name: 'Adhere to the Same Standards of Behavior Online and Offline'
    }, {
      value: 5,
      name: 'Know where you are in Cyberspace'
    }, {
      value: 6,
      name: 'Respecting Other People\'s Time and Bandwidth'
    }, {
      value: 7,
      name: 'Make Yourself Look Good Online'
    }, {
      value: 8,
      name: 'Share Expert Knowledge'
    }, {
      value: 9,
      name: 'Help Keep Flame Wars Under Control'
    }, {
      value: 10,
      name: 'Respect Other People\'s Privacy'
    }, {
      value: 11,
      name: 'Don\'t Abuse Your Power'
    }, {
      value: 12,
      name: 'Be Forgiving of Other People\'s Mistakes'
    }
  ];

  $scope.dtGuidelines = [
    {name: "Sender and Receiver"},
    {name: "Only say things you would say to a real person's face in real life"},
    {name: "Sender and Receiver"},
    {name: "Communication Devices"}
  ];

  $scope.questions = [
    "Subject (internal factors / people active in the scenario)",
    "Objective (what action triggered/stimulated the series of events?)",
    "Community (external factors / people affected whether active or inactive)",
    "Tools (what tools explicitly used in the scenario)",
    "Rules / Guidelines Applied (based on the element of comparison, what rules apply)"
  ];

  $scope.contentScenarios = $scope.scenarios.content;

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
