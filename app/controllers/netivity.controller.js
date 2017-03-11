angular.module('Netsafe').controller('netivityController', function($scope) {
  console.log('you are in netivity controller');

  // Tabs for scenario difficulty
  $scope.showTab = function(id){
    $(".tab").removeClass("active");
    $(".tab-content").hide();

    $("#tab-"+ id).addClass("active");
    $("#tab-content-" + id).show();
  };

  $scope.showTab(1);

  // Tabs for easy difficulty scenarios
  $scope.showEasyScenario = function(id){
    $(".button-num").removeClass("active");
    $(".scenario-content").hide();

    $("#easy-scenario-"+ id).addClass("active");
    $("#easy-scenario-content-" + id).show();
  };

  $scope.showEasyScenario(1);

  // Tabs for Med difficulty scenarios
  $scope.showMedScenario = function(id){
    $(".button-num").removeClass("active");
    $(".scenario-content").hide();

    $("#med-scenario-"+ id).addClass("active");
    $("#med-scenario-content-" + id).show();
  };

  $scope.showMedScenario(1);

  // Tabs for Hard difficulty scenarios
  $scope.showHardScenario = function(id){
    $(".button-num").removeClass("active");
    $(".scenario-content").hide();

    $("#button-num-"+ id).addClass("active");
    $("#scenario-content-" + id).show();
  };

  $scope.showHardScenario(1);


  // Scenario contents

  $scope.easy1Scenarios = [
    {
      scenario: "What is needed in the scenario?",
      answer: "Posting digital artworks of Thomas",
      answered: false
    },
    {
      scenario: "Who are involved in the scenario?",
      answer: "Thomas and an anonymous fellow",
      answered: false
    },
    {
      scenario: "Who and what are affected by the scenario?",
      answer: "Thomas",
      answered: false
    },
    {
      scenario: "What tools are used in the scenario?",
      answer: "E-mail and Facebook",
      answered: false
    },
    {
      scenario: "What are the actions of the people involved?",
      answer: "Thomas posted his digital artworks on his facebook page.\
                The anonymous fellow emailed Thomas that his digital artworks\
                are trash and should quit creating digital arts.",
      answered: false
    },
    {
      scenario: "What guidelines are related to the scenario?",
      answer: "Remember the Human",
      answered: false
    }
  ];

  $scope.easy2Scenarios = [
    {
      scenario: "2 What is needed in the scenario?",
      answer: "2 Posting digital artworks of Thomas",
      answered: false
    },
    {
      scenario: "Who are involved in the scenario?",
      answer: "Thomas and an anonymous fellow",
      answered: false
    },
    {
      scenario: "Who and what are affected by the scenario?",
      answer: "Thomas",
      answered: false
    },
    {
      scenario: "What tools are used in the scenario?",
      answer: "E-mail and Facebook",
      answered: false
    },
    {
      scenario: "What are the actions of the people involved?",
      answer: "Thomas posted his digital artworks on his facebook page.\
                The anonymous fellow emailed Thomas that his digital artworks\
                are trash and should quit creating digital arts.",
      answered: false
    },
    {
      scenario: "What guidelines are related to the scenario?",
      answer: "Remember the Human",
      answered: false
    }
  ];

  $scope.med1Scenarios = [
    {
      scenario: "1 What is needed in the scenario?",
      answer: "med Posting digital artworks of Thomas",
      answered: false
    },
    {
      scenario: "Who are involved in the scenario?",
      answer: "Thomas and an anonymous fellow",
      answered: false
    },
    {
      scenario: "Who and what are affected by the scenario?",
      answer: "Thomas",
      answered: false
    },
    {
      scenario: "What tools are used in the scenario?",
      answer: "E-mail and Facebook",
      answered: false
    },
    {
      scenario: "What are the actions of the people involved?",
      answer: "Thomas posted his digital artworks on his facebook page.\
                The anonymous fellow emailed Thomas that his digital artworks\
                are trash and should quit creating digital arts.",
      answered: false
    },
    {
      scenario: "What guidelines are related to the scenario?",
      answer: "Remember the Human",
      answered: false
    }
  ];

});
