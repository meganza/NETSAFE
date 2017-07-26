angular.module('Netsafe').controller('rulesController', function($scope, $timeout, RulesFactory) {
	console.log('you are in rulesController');
  $scope.rules = RulesFactory;
  $scope.contentRules = $scope.rules.content;
  $scope.doDontTable = true;
  $scope.step1 = true;
  $scope.clicked = 0;

  $scope.answerClicked = []; // or initialize with false

  $scope.viewAnswer = function (index){
    console.log(index);
    $scope.answerClicked[index] = !$scope.answerClicked[index];
  };

  $scope.checkAllAnswer = function (num){
    console.log(num);
  };

  $scope.questions = [
      "Subject (people active in the scenario)",
      "Objective (what is the first action that triggered the chain of events?)",
      "Community (external factors / people affected whether active or inactive)",
      "Tools (what tools explicitly used in the scenario)"
  ];

  $timeout(function() {
    $scope.currentRule = 0;
  }, 1);

  $scope.showRule = function(index) {
    $scope.currentRule = index;
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

});
