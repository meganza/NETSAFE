angular.module('Netsafe').factory('ScenariosFactory', function() {
  return {
    content: [
    {
      scenario: "While you were in Middle School, you often use swear words on twitter. Whenever you tweet, " +
                "there were always swear words included. Most of your followers got put off because of your " +
                "behavior online and even your cousins, who follows you, saw your tweets full of curse words. " +
                "Your behavior online was found out by your parents through your cousins. Because of this, your " +
                "parents got disappointed and grounded you for a week and no longer allowed you to use any kind " +
                "of social media. ",
      answers: [  // correct answers should be placed 3, 1, 4, 4, 2
        [[     // 3
          "Your followers",
          "Cousins and your parents",
          "You, cousins, your parents",
          "Cousins"
        ]],
        [[ // 1
          "You often use swear words in your tweets",
          "You often use Twitter",
          "You tweet uninteresting things",
          "Your cousins told your parents about your behavior on Twitter"
        ]],
        [[ // 4
          "Cousins, you, parents",
          "You",
          "Parents",
          "You, your followers, Parents"
        ]],
        [[ // 4
          "Snapchat",
          "Instagram",
          "Facebook",
          "Twitter"
        ]],
        [
          [ // 2
            "Remember the Human",
            "Make yourself look good online",
            "Don’t abuse your power",
            "Adhere to the same standards of behavior online that you follow in real life"
          ],
          [
            "Remember the Human",
            "Make yourself look good online",
            "Don’t abuse your power",
            "Adhere to the same standards of behavior online that you follow in real life"
          ]
        ]
      ],
      answersOrder: [[2], [0], [3], [3], [1, 3]],
      labors: [
            "Whenever you tweet, you include swear words.",
            "Your parents got disappointed and grounded you for a week and no longer allowed you to use any kind of social media.",
            "Most of your followers got put off because of your behavior online and even your cousins, who follows you, saw your tweets full of curse words.",
            "Your behavior online was found out by your parents through your cousins. "
      ],
      laborsOrder: [0, 2, 3, 1],
      correctLabors: [
            {
              old: "Whenever you tweet, you include swear words.",
              new: "Whenever you tweet, you do not include swear words."
            }, {
              old: "Most of your followers got put off because of your behavior online and even your cousins, who follows you, saw your tweets full of curse words. ",
              new: "Whenever you tweet, you do not include swear words."
            }, {
              old: "Your behavior online was found out by your parents through your cousins.",
              new: "Your behavior online was not found out by your parents through your cousins. "
            }, {
              old: "Your parents got disappointed and grounded you for a week and no longer allowed you to use any kind of social media. ",
              new: "Your parents did not get disappointed and grounded you for a week and allowed you to use any kind of social media.  "
            }
      ],
      correctRules: [
        {
          title: "Make yourself look good online",
          description: "Be presentable on the internet by only posting accurate and logical things.",
          highlights: [0]
        }, {
          title: "SECONDO ASKHDSD Make yourself look good online",
          description: "Be presentable on the internet by only posting accurate and logical things.",
          highlights: [0]
        },
      ],
      negateStop: -1,
      solution: "You should not use swear words as much as possible, especially when online where other people " +
                "can see it. People might see it as an inappropriate behavior and could reflect their judgement " +
                "of your character. Do not use offensive language and it is better to keep your reputation or self " +
                "image good online where a lot of people could see your posts, tweets, and profile. "
    },
    {
      // put stuff here
    },
    {
      // put stuff here
    }
  ]
  };
});
