angular.module('Netsafe').controller('rulesController', function($scope, $timeout, RulesFactory) {
	console.log('you are in rulesController');
  $scope.rules = RulesFactory;
  $scope.contentRules = $scope.rules.content;
  $scope.doDontTable = true;
  $scope.step1 = true;
  $scope.clicked = 0;
  $scope.laborNegated = false;
  $scope.isDisabled = true;
  $scope.firstChecker = false;

  $scope.laborClicked = [];
  $scope.allowSolution = false;
  $scope.showSolution = false;

  $scope.openTable = function (num){
    if(num === 1){
      $scope.elementsTable = !$scope.elementsTable;
    } else {
      $scope.causeEffectTable = !$scope.causeEffectTable;
    }
  };

  $scope.negateLabor = function (index, pIndex){
    console.log("curent index: " + index);
    console.log("curent pIndex: " + pIndex);

    if(!$scope.firstChecker){
      $scope.laborLength = $scope.contentRules[pIndex].labors.length;
      $scope.laborLength--;
      $scope.firstChecker = true;
      console.log("inside not first checker");
    }
    console.log("curent length: " + $scope.laborLength);

    if($scope.laborLength == index && index != $scope.contentRules[pIndex].negateStop){
       $scope.laborClicked[index] = !$scope.laborClicked[index];
       $scope.laborLength--;
    }

    // stops on the number of where the negation ends
    if($scope.laborLength == $scope.contentRules[pIndex].negateStop){
        console.log($scope.laborLength);
        $scope.allowSolution = true;
    }
  };

  $scope.highlight = function(pIndex){
    console.log(pIndex);  //parent index
    $scope.highlightToggle = !$scope.highlightToggle;

    $scope.currentRuleHighlights = $scope.contentRules[pIndex].highlights;
    $scope.currentRuleLabors = $scope.contentRules[pIndex].labors;

    if($scope.highlightToggle){
      for(var i = 0; i < $scope.currentRuleLabors.length; i++){
        for(var j = 0; j< $scope.currentRuleHighlights.length; j++){
          if(i == $scope.currentRuleHighlights[j] && !$scope.laborClicked[i])
            $(".action-" + i).addClass("highlighted");
        }
      }
    } else {
      $(".action").removeClass("highlighted");
    }
  };

  $scope.answerClicked = []; // or initialize with false

  $scope.viewAnswer = function (index){
      console.log(index);
      $scope.answerClicked[index] = !$scope.answerClicked[index];
      if(index == 3){
        $scope.isDisabled = false;
      }
  };

  $scope.viewSolution = function (){
    if($scope.allowSolution){
      $scope.showSolution = !$scope.showSolution;
    }
  };

  $timeout(function() {
    $scope.currentRule = 0;
  }, 1);

  $scope.showRule = function(index) {
    $scope.currentRule = index;

    if($scope.highlightToggle){
      $scope.highlightToggle = !$scope.highlightToggle;
    } else {
      $scope.highlightToggle = $scope.highlightToggle;
    }
    $scope.answerClicked = [];
    $scope.laborClicked = [];
    $scope.openedAll = false;
  };

  $timeout(function() {
    $('.carousel').slick({
      dots: true,
    });
  }, 1);

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

  $scope.questions = [
      "Subject (people active in the scenario)",
      "Objective (what is the first action that triggered the chain of events?)",
      "Community (Who are involved whether active or inactive)",
      "Tools (what tools explicitly used in the scenario)"
  ];

  $scope.showAll = function(){
    $scope.viewAnswer(0);
    $scope.viewAnswer(1);
    $scope.viewAnswer(2);
    $scope.viewAnswer(3);
  };

  $scope.tutLaborClick = function(num){
    console.log("Hello");
    if(num === 5){
      $scope.laborClicked5 = true;
    } else if (num === 4 && $scope.laborClicked5){
      $scope.laborClicked4 = true;
    } else if (num === 3 && $scope.laborClicked5 && $scope.laborClicked4){
      $scope.laborClicked3 = true;
    } else if (num === 2 && $scope.laborClicked5 && $scope.laborClicked4 && $scope.laborClicked3){
      $scope.laborClicked2 = true;
    } else if(num === 1 && $scope.laborClicked5 && $scope.laborClicked4 && $scope.laborClicked3 && $scope.laborClicked2){
      $scope.laborClicked1 = true;
    }
  };

});
