angular.module('Netsafe').controller('netivityController', function($scope) {
  console.log('you are in netivity controller');

  $scope.clickAnswer = function(){
    $scope.openAnswer = !$scope.openAnswer;
  }

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

    $("#hard-scenario-"+ id).addClass("active");
    $("#hard-scenario-content-" + id).show();
  };

  $scope.showHardScenario(1);

  // Scenario contents

  $scope.easy1Scenarios = [
    {
      scenario: "What is needed in the scenario?",
      answers: [
        {
          id: 1,
          answer: "Posting digital artworks of Thomas"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "---"
        },
        {
          id: 4,
          answer: "---"
        }
      ]
    },
    {
      scenario: "Who are involved in the scenario?",
      answers: [
        {
          id: 1,
          answer: "---"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "Thomas and an anonymous fellow"
        },
        {
          id: 4,
          answer: "---"
        }
      ]
    },
    {
      scenario: "Who and what are affected by the scenario?",
      answers: [
        {
          id: 1,
          answer: "---"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "Thomas"
        },
        {
          id: 4,
          answer: "---"
        }
      ]
    },
    {
      scenario: "What tools are used in the scenario?",
      answers: [
        {
          id: 1,
          answer: "---"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "---"
        },
        {
          id: 4,
          answer: "E-mail and Facebook"
        }
      ]
    },
    {
      scenario: "What are the actions of the people involved?",
      answers: [
        {
          id: 1,
          answer: "Thomas posted his digital artworks on his facebook page.\
                The anonymous fellow emailed Thomas that his digital artworks\
                are trash and should quit creating digital arts."
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "---"
        },
        {
          id: 4,
          answer: "---"
        }
      ]
    },
    {
      scenario: "What guidelines are related to the scenario?",
      answers: [
        {
          id: 1,
          answer: "---"
        },
        {
          id: 2,
          answer: "Remember the Human"
        },
        {
          id: 3,
          answer: "---"
        },
        {
          id: 4,
          answer: "---"
        }
      ]
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

// if ($scope.answer1.id === 1) // this is the correct answer
