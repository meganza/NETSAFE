angular.module('Netsafe').controller('netivityController', function($scope) {
  console.log('you are in netivity controller');
  $scope.clickAnswer = function(index){
    $("#answer-" + index).toggle();
  }

  $scope.correct = false;
  $('.checkCorrect').hide();
  $('.checkWrong').hide();

  $scope.checkAnswer = function(){
    for(var i = $scope.correctAnswers.length; i--;) {
      if($scope.correctAnswers[i] === $scope.answers[i].id)
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
    $(".answer-modal").hide();
  };

  $scope.showEasyScenario(1);

  // Tabs for Med difficulty scenarios
  $scope.showMedScenario = function(id){
    $(".button-num").removeClass("active");
    $(".scenario-content").hide();
    $("#med-scenario-"+ id).addClass("active");
    $("#med-scenario-content-" + id).show();
    $(".answer-modal").hide();
  };

  $scope.showMedScenario(1);

  // Tabs for Hard difficulty scenarios
  $scope.showHardScenario = function(id){
    $(".button-num").removeClass("active");
    $(".scenario-content").hide();
    $("#hard-scenario-"+ id).addClass("active");
    $("#hard-scenario-content-" + id).show();
    $(".answer-modal").hide();
  };

  $scope.showHardScenario(1);

  $scope.answers = [0, 0, 0, 0, 0, 0, 0];
  // Scenario contents

  $scope.correctAnswers = [3,1,3,4,1,2,4];

  $scope.easy1Scenarios = [
    {
      scenario: "What is needed in the scenario?",
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
          answer: "To decide whether Sarah should send a picture or herself and her family or not."
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
          answer: "Sara and the 10-year-old boy"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "--"
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
          answer: "Sarah, the boy, and Sarah’s family"
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
          answer: "Online messaging application, family photo"
        }
      ]
    },
    {
      scenario: "What are the actions of the people involved?",
      answers: [
        {
          id: 1,
          answer: "Sarah is chatting with a 10-year-old boy.\
                  The boy sends Sarah a picture of himself.\
                  The boy asks Sarah to send him a photo of herself and her family.\
                  Sarah sends a picture of herself and her family to the boy."
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
          answer: "Giving away too much information (Digital Tattoo)"
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
      scenario: "Solution",
      answers: [
        {
          id: 1,
          answer: "--sdfasdfa-"
        },
        {
          id: 2,
          answer: "-asdfwerrr--"
        },
        {
          id: 3,
          answer: "-rrrrrrrr--"
        },
        {
          id: 4,
          answer: "--correct-"
        }
      ]
    }
  ];

  $scope.easy2Scenarios = [
    {
      scenario: "What is needed in the scenario?",
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
          answer: "Apply for a highly competitive internship"
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
          answer: "You, your teacher, and interviewer"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "--"
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
          answer: "You and the teachers"
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
          answer: "blog"
        }
      ]
    },
    {
      scenario: "What are the actions of the people involved?",
      answers: [
        {
          id: 1,
          answer: "You wrote a blog post criticizing one of your teachers in middle school. You ridicule the teacher’s age, race, and physical appearance.\
                  You are applying for a highly competitive internship in college.\
                  The interviewer brings out a copy of the blog post and questions you about it."
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
          answer: "What do I look online (Digital tattoo)\
                   Make yourself look good online"
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
      scenario: "Solution",
      answers: [
        {
          id: 1,
          answer: "--sdfasdfa-"
        },
        {
          id: 2,
          answer: "-asdfwerrr--"
        },
        {
          id: 3,
          answer: "-rrrrrrrr--"
        },
        {
          id: 4,
          answer: "--correct-"
        }
      ]
    }
  ];

  $scope.easy3Scenarios = [
    {
      scenario: "What is needed in the scenario?",
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
          answer: "To take action against the older student who has made an unflattering and mean video of your friend"
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
          answer: "Your friend, now you, the older student, and the friends of the older student"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "--"
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
          answer: "Your friend"
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
          answer: "Video recorder, video editor"
        }
      ]
    },
    {
      scenario: "What are the actions of the people involved?",
      answers: [
        {
          id: 1,
          answer: "The older student recorded a video of your friend while your friend was \
                  practicing for a school play. The older student then edited the video to \
                  make your friend look immature and unintelligent and has shown it to all of \
                  his friends. Meanwhile, your friend has stayed quiet about this."
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
          answer: "Remember the human"
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
      scenario: "Solution",
      answers: [
        {
          id: 1,
          answer: "--sdfasdfa-"
        },
        {
          id: 2,
          answer: "-asdfwerrr--"
        },
        {
          id: 3,
          answer: "-rrrrrrrr--"
        },
        {
          id: 4,
          answer: "--correct-"
        }
      ]
    }
  ];

  $scope.easy4Scenarios = [
    {
      scenario: "What is needed in the scenario?",
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
          answer: "To find out who violated his privacy"
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
          answer: "Adam and the unknown perpetrator"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "--"
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
          answer: "Adam and his e-mail account"
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
          answer: "Notebook"
        }
      ]
    },
    {
      scenario: "What are the actions of the people involved?",
      answers: [
        {
          id: 1,
          answer: "The unknown perpetrator took a peek at Adam’s password that he saved in his notebook."
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
          answer: "Respect other people’s privacy (10 core rules of netiquette"
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
      scenario: "Solution",
      answers: [
        {
          id: 1,
          answer: "--sdfasdfa-"
        },
        {
          id: 2,
          answer: "-asdfwerrr--"
        },
        {
          id: 3,
          answer: "-rrrrrrrr--"
        },
        {
          id: 4,
          answer: "--correct-"
        }
      ]
    }
  ];

  $scope.easy5Scenarios = [
    {
      scenario: "What is needed in the scenario?",
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
          answer: "To know if it’s okay for Steve to give Jose his user ID and password to give him access to his Facebook"
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
          answer: "Steve, Jose, and the class"
        },
        {
          id: 2,
          answer: "---"
        },
        {
          id: 3,
          answer: "--"
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
          answer: "Steve and his Facebook account"
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
          answer: "Facebook"
        }
      ]
    },
    {
      scenario: "What are the actions of the people involved?",
      answers: [
        {
          id: 1,
          answer: "Steve gave his best friend his password and user ID to check if his account information is okay"
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
          answer: "Respect other people’s privacy (10 core rules of netiquette"
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
      scenario: "Solution",
      answers: [
        {
          id: 1,
          answer: "--sdfasdfa-"
        },
        {
          id: 2,
          answer: "-asdfwerrr--"
        },
        {
          id: 3,
          answer: "-rrrrrrrr--"
        },
        {
          id: 4,
          answer: "--correct-"
        }
      ]
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
