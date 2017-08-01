angular.module('Netsafe').controller('netivityController',
  function($scope, $timeout, ScenariosFactory) {
  $scope.scenarios = ScenariosFactory;
  $scope.contentScenarios = $scope.scenarios.content;
  $scope.solutionModal = false;

  $scope.scenarioContent = true;
  $scope.elementsTable = false;
  $scope.causeEffectTable = false;
  $scope.comparisonTable = false;
  $scope.isCEDisabled = true;
  $scope.isCDisabled = true;

  $scope.highlightToggle = [];
  $scope.noAns = true;

  $(".activity-alert").hide();
  $(".answer-modal").hide();

  $scope.openTable = function (num){
    console.log("elements: " + $scope.elementsTable);
    console.log("cause Effect: " + $scope.causeEffectTable);
    console.log("comparison: " + $scope.comparisonTable);

    if(num === 1 && !$scope.causeEffectTable && !$scope.comparisonTable){
      $scope.noAns = true;
      $scope.elementsTable = !$scope.elementsTable;
    } else if (num === 2 && !$scope.elementsTable && !$scope.comparisonTable){
      $scope.noAns = true;
      $scope.causeEffectTable = !$scope.causeEffectTable;
    } else if (num === 3 && !$scope.elementsTable && !$scope.causeEffectTable) {
      $scope.noAns = true;
      $scope.comparisonTable = !$scope.comparisonTable;
    }
  };

  $scope.elementsAnswers = [[], [], [], [], []];
  $scope.correctAnswers = [];

  $timeout(function() {
    $scope.currentScenario = 0;
  }, 1);

  $scope.addAnswer = function (selectIndex){
    $scope.noAns = false;
    console.log(selectIndex);
    console.log($scope.elementsAnswers);
  };

  $scope.checkElements = function(pIndex){
    $scope.correctAnswers = $scope.contentScenarios[pIndex].answersOrder;
    console.log($scope.correctAnswers.length);
    console.log($scope.elementsAnswers);

    $scope.wrongAnswers = [];
    $(".ans").removeClass("wrong");

    for(var i = 0; i < $scope.correctAnswers.length; i++){
      for(var j = 0; j <= $scope.correctAnswers[i].length; j++){
        if($scope.correctAnswers[i][j] !== $scope.elementsAnswers[i][j]){
          $scope.wrongAnswers.push(i);
        }
      }
    }

    $scope.correct = !$scope.wrongAnswers.length;
    if($scope.correct){
      $('.checkCorrect').show();
      $scope.isCEDisabled = false;
      $scope.scenarioDetails = true;
    } else {
      for(var m = 0; m < $scope.wrongAnswers.length; m++){
        $(".ans-" + $scope.wrongAnswers[m]).addClass("wrong");
      }
    }
  };

  $scope.answerAllElements = function(pIndex){
    $(".ans").removeClass("wrong");
    $scope.correctAnswers = $scope.contentScenarios[pIndex].answersOrder;

    for(var i = 0; i < $scope.correctAnswers.length; i++){
      console.log($scope.correctAnswers[i]);
      for (var j = 0; j < $scope.correctAnswers[i].length; j++){
        $scope.elementsAnswers[i][j] = $scope.correctAnswers[i][j];
      }
     }
    $scope.isCEDisabled = false;
    $scope.scenarioDetails = true;
  };

  $scope.causeEffectAnswers = [];
  $scope.correctCauseEffectAnswers = [];

  $scope.addCEAnswer = function (pIndex){
    $scope.noAns = false;
    $scope.correctCauseEffectAnswers = $scope.contentScenarios[pIndex].laborsOrder;
  };

  $scope.answerAllCauseEffect = function(pIndex){
    $scope.correctCauseEffectAnswers = $scope.contentScenarios[pIndex].laborsOrder;
    for(var i = 0; i < $scope.correctCauseEffectAnswers.length; i++){
      $scope.causeEffectAnswers[i] = $scope.correctCauseEffectAnswers[i];
    }
    $scope.isCDisabled = false;

    $scope.totalRules = $scope.contentScenarios[pIndex].correctRules.length;
      console.log($scope.totalRules);
      for(var m = 0; m < $scope.totalRules; m++){
        console.log("inside loop " +  m);
        $scope.highlightToggle[m] = false;
      }
  };

  $scope.checkCauseEffectAnswer = function(pIndex){
    $scope.wrongAnswers = [];
    $(".ans").removeClass("wrong");

    for(var i = 0; i < $scope.correctCauseEffectAnswers.length; i++){
        if($scope.correctCauseEffectAnswers[i] !== $scope.causeEffectAnswers[i]){
          $scope.wrongAnswers.push(i);
      }
    }

    $scope.correct = !$scope.wrongAnswers.length;
    if($scope.correct){
      $('.checkCorrect').show();
      $scope.isCDisabled = false;

      $scope.totalRules = $scope.contentScenarios[pIndex].correctRules.length;
      console.log($scope.totalRules);
      for(var m = 0; m < $scope.totalRules; m++){
        console.log("inside loop " +  m);

        $scope.highlightToggle[m] = false;
      }
      var str = JSON.stringify($scope.highlightToggle);
      console.log("highlightToggle: " + str);

    } else {
      console.log($scope.wrongAnswers);
      for(var m = 0; m < $scope.wrongAnswers.length; m++){
        $(".ans-" + $scope.wrongAnswers[m]).addClass("wrong");
      }
    }
  };

  $scope.highlight = function(index, pIndex){
    $scope.currentScenarioRuleHighlights = $scope.contentScenarios[pIndex].correctRules[index].highlights;
    $scope.currentScenarioLaborsLength = $scope.contentScenarios[pIndex].labors.length;

    $scope.highlightToggle[index] = !$scope.highlightToggle[index];

    if($scope.highlightToggle[index]){
      for(var i = 0; i < $scope.currentScenarioLaborsLength; i++){
        for(var j = 0; j< $scope.currentScenarioRuleHighlights.length; j++){
          if(i === $scope.currentScenarioRuleHighlights[j] && !$scope.laborClicked[i])
            if( $(".action-" + i).hasClass("highlighted")){
              $(".action-" + i).addClass("diffColor");
            } else {
              $(".action-" + i).addClass("highlighted");
            }
        }
      }
    } else {
      $(".action").removeClass("highlighted");
      $(".action").removeClass("diffColor");

      for(var y = 0; y < $scope.contentScenarios[pIndex].correctRules.length; y++){
        if($scope.highlightToggle[y] && y !== index){
          console.log("evaluating ", y);
          for(var h = 0; h < $scope.contentScenarios[pIndex].correctRules[y].highlights.length; h++){
            for(var m = 0; m < $scope.currentScenarioLaborsLength; m++){
              if(m === $scope.contentScenarios[pIndex].correctRules[y].highlights[h] && !$scope.laborClicked[m])
                $(".action-" + m).addClass("highlighted");
            }
          }
        }
      }
    }
  };

  $scope.laborClicked = [];
  $scope.firstChecker = false;
  $scope.allowSolution = false;

  $scope.negateLabor = function (index, pIndex){
    console.log(pIndex);
    if(!$scope.firstChecker){
      $scope.laborLength = $scope.contentScenarios[pIndex].correctLabors.length;
      $scope.laborLength--;
      $scope.firstChecker = true;
      console.log("inside not first checker");
    }
    console.log("curent length: " + $scope.laborLength);

    if($scope.laborLength === index && index != $scope.contentScenarios[pIndex].negateStop){
       $scope.laborClicked[index] = !$scope.laborClicked[index];
       $scope.laborLength--;
    }

    // stops on the number of where the negation ends
    if($scope.laborLength === $scope.contentScenarios[pIndex].negateStop){
        console.log($scope.laborLength);
        $scope.allowSolution = true;
    }
  };

  $scope.showScenario = function(index) {
    $scope.currentScenario = index;
    $scope.currentRule = index;
    $scope.scenarioDetails = false;

    $scope.correctAnswers = [];
    $scope.elementsAnswers = [[], [], [], [], []];

    $scope.causeEffectAnswers = [];
    $scope.correctCauseEffectAnswers = [];

    $scope.wrongAnswers = [];

    $scope.laborClicked = [];
    $scope.laborLength = [];

    $scope.elementsTable = false;
    $scope.causeEffectTable = false;
    $scope.comparisonTable = false;
    $scope.scenarioContent = true;

    $('.checkCorrect').hide();
    $('.checkWrong').hide();
    $('.checkNoAns').hide();

    $scope.solutionModal = false;
    $scope.isCEDisabled = true;
    $scope.isCDisabled = true;

    $scope.firstChecker = false;
    $scope.allowSolution = false;

    $(".action").removeClass("highlighted");
    $(".ans").removeClass("wrong");
    $scope.highlightToggle = [];

    var str = JSON.stringify($scope.highlightToggle);
    console.log("highlightToggle: " + str);

  };

  $scope.viewSolution = function (){
    if($scope.allowSolution){
      $scope.solutionModal = !$scope.solutionModal;
    }
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

  $scope.elements = [
    { value: 1,
      name: 'Remember the Human'
    }, {
      value: 2,
      name: 'Adhere to the Same Standards of Behavior Online and Offline'
    }, {
      value: 3,
      name: 'Know where you are in Cyberspace'
    }, {
      value: 4,
      name: 'Respecting Other People\'s Time and Bandwidth'
    }, {
      value: 5,
      name: 'Make Yourself Look Good Online'
    }, {
      value: 6,
      name: 'Share Expert Knowledge'
    }, {
      value: 7,
      name: 'Help Keep Flame Wars Under Control'
    }, {
      value: 8,
      name: 'Respect Other People\'s Privacy'
    }, {
      value: 9,
      name: 'Don\'t Abuse Your Power'
    }, {
      value: 10,
      name: 'Be Forgiving of Other People\'s Mistakes'
    }
  ];

  $scope.guidelines1 = [
    {name: "Sender and Receiver"},
    {name: "When the sender makes a statement or posted something on the online platform"},
    {name: "Sender and Receiver"},
    {name: "Online platform"},
    {name: "Remember the human"}
  ];

  $scope.guidelines2 = [
    {name: "Netizen/s"},
    {name: "When the netizen posts online"},
    {name: "Netizen/s"},
    {name: "Online platform"},
    {name: "Adhere to the same standards of behavior online that you follow in real life"}
  ];

  $scope.guidelines3 = [
    {name: "Netizen/s"},
    {name: "When you start participating in a new community online"},
    {name: "Netizen/s"},
    {name: "Online platform"},
    {name: "Know where you are in cyberspace"}
  ];

  $scope.guidelines4 = [
    {name: "Sender and/or receiver"},
    {name: "When you are sending information on the online platform"},
    {name: "Sender, receiver, and/or netizens in the online community"},
    {name: "Online platform"},
    {name: "Respect other people’s time and bandwidth"}
  ];

  $scope.guidelines5 = [
    {name: "Netizen/s"},
    {name: "When you are posting your own content on the online platform"},
    {name: "Netizen/s"},
    {name: "Online platform"},
    {name: "Make yourself look good online"}
  ];

  $scope.guidelines6 = [
    {name: "Sender and/or receiver"},
    {name: "When you’re asking for or  exchanging expert information"},
    {name: "Sender and receiver"},
    {name: "Online platform"},
    {name: "Share expert knowledge"}
  ];

  $scope.guidelines7 = [
    {name: "Sender and/or receiver"},
    {name: "Posting or making a statement online"},
    {name: "Sender and receiver"},
    {name: "Online platform"},
    {name: "Help keep flame wars under control"}
  ];

  $scope.guidelines8 = [
    {name: "Owner and infiltrator"},
    {name: "When you access other people's private information without their full consent "},
    {name: "Owner and infiltrator"},
    {name: "Online platform"},
    {name: "Respect other people’s privacy"}
  ];

  $scope.guidelines9 = [
    {name: "Subordinate and Admin"},
    {name: "When there is a need to access admin features"},
    {name: "Subordinate and admin"},
    {name: "Company network, company online platform"},
    {name: "Don’t abuse your power"}
  ];

  $scope.guidelines10 = [
    {name: "Sender and/or receiver"},
    {name: "Posting or making a statement online"},
    {name: "Sender and receiver"},
    {name: "Online platform"},
    {name: "Be forgiving of other people’s mistakes"}
  ];

  $scope.questions = [
    "Subject (internal factors / people active in the scenario)",
    "Objective (what is the first action that triggered the chain of events?)",
    "Community (who are involved whether active or inactive)",
    "Tools (what tools explicitly used in the scenario)",
    "Rules / Guidelines Applied (based on the element of comparison, what rules apply)"
  ];

  $scope.elementsGuide = [
    {content: "The subject is/are the people who are active in the scenario. Their actions have direct impact in the scenario. "},
    {content: "The objective is the first action that triggered the series of events. The objective is what causes everything that happens in the scenario. "},
    {content: "The community is/are the people who are affected in the scenario whether they are active or inactive. "},
    {content: "The tool is the objects that are directly related to cyberspace or the type of media explicitly used in the scenario."},
    {content: "The rules / guidelines are the specific ones that violate the scenario in discussion."}
  ];

  $scope.tutLaborClick = function(num){
    if(num === 3){
      $scope.thirdAction = true;
    } else if (num === 2 && $scope.thirdAction){
      $scope.secondAction = true;
    }
  };

});
