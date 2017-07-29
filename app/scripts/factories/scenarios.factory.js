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
      answers: [
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
        [[ // 2
            "Remember the Human",
            "Make yourself look good online",
            "Don’t abuse your power",
            "Adhere to the same standards of behavior online that you follow in real life"
        ]]
      ],
      answersOrder: [[2], [0], [3], [3], [1]],
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
        }
      ],
      negateStop: -1,
      solution: "You should not use swear words as much as possible, especially when online where other people " +
                "can see it. People might see it as an inappropriate behavior and could reflect their judgement " +
                "of your character. Do not use offensive language and it is better to keep your reputation or self " +
                "image good online where a lot of people could see your posts, tweets, and profile. "
    },
    {
      scenario: "Adam just recently got to his new school. The school apparently provides email " +
                "accounts to all students. Not having been aware of this, and being aware that he " +
                "is a forgetful person, Adam writes the password and e-mail given to him just now on " +
                "his notebook (which is unsecure), confident that it will be on his person at all times " +
                "when he is not using it. However, during class, he is suddenly called to the counseling " +
                "office. In his haste, he leaves his books and notebooks in class and goes to the office. " +
                "When he gets back, the class is dismissed, everyone is leaving, and his notebook is open to " +
                "the page with his password. Another new student approaches you and says that he saw someone " +
                "rifling through Adam’s notebook.",
      answers: [
        [[ // 4
          "Adam, counsellor",
          "Anonymous infiltrator, school",
          "Adam",
          "Adam, anonymous infiltrator"
        ]],
        [[ // 3
          "Adam receives his new school e-mail and password",
          "Adam speaks to his new schoolmate",
          "Adam writes down his password on his notebook and leaves it",
          "Adam arrives at his new school"
        ]],
        [[ // 3
          "Adam and the anonymous infiltrator",
          "Adam and his new classmate",
          "Adam",
          "Adam and his counsellor"
        ]],
        [[ // 1
          "Notebook",
          "E-mail",
          "School",
          "Password"
        ]],
        [[ // 4
            "Remember the Human",
            "Adhere to the same standards of behavior online that you follow in real life",
            "Don’t abuse your power",
            "Respect other people’s privacy"
        ]]
      ],
      answersOrder: [[3], [2], [2], [0], [3]],
      labors: [
            "When he gets back, his notebook is open and another new student says that someone looked through his notebook without his permission.",
            "He is suddenly called to the guidance counsellor’s office so he rushes there.",
            "Adam was given his school e-mail account as he arrived at his new school. ",
            "He writes down his password on his notebook because he is forgetful. "
      ],
      laborsOrder: [2, 3, 1, 0],
      correctLabors: [
            {
              old: "Adam was given his school e-mail account as he arrived at his new school. ",
              new: "-"
            }, {
              old: "He writes down his password on his notebook because he is forgetful.",
              new: "-"
            }, {
              old: "He is suddenly called to the guidance counsellor’s office so he rushes there.",
              new: "-"
            }, {
              old: "When he gets back, his notebook is open and another new student says that someone looked through his notebook without his permission. ",
              new: "When he gets back, his notebook is not open and another new student says that someone did not look through his notebook without his permission."
            }
      ],
      correctRules: [
        {
          title: "Respect other people’s privacy",
          description: "Never ask someone's information that you are not comfortable giving out yourself and do not get someone's private information without permission",
          highlights: [3]
        }
      ],
      negateStop: 2,
      solution: "That person who looked through his notebook should not have looked through Adam’s notebook " +
                "without his permission. Do not access information that is not meant to be public or not " +
                "meant for them to be read."
    },
    {
      scenario: "Bob’s co-worker told him that he will be having a meeting later on that day. A few hours " +
                "later, Bob emailed his co-worker asking for details about a project they are working on. " +
                "Bob waited for his co-worker’s reply for 5 minutes but he did not receive any reply. Because " +
                "of this, Bob sent 12 messages to his co-worker with the same content saying that “Hi, please " +
                "send me the details of the project ASAP.” Bob’s co-worker got annoyed of Bob’s actions because " +
                "Bob could not wait for his reply while he was in a meeting. This caused a tension between their " +
                "working relationship. Bob’s co-worker quit from the project and this left Bob to work on the " +
                "project on his own.",
      answers: [
        [[ // 1
          "Bob, Bob’s co-worker",
          "Bob’s co-worker",
          "No one",
          "Bob"
        ]],
        [[ // 4
          "Bob’s co-worker did not reply to Bob’s email immediately",
          "Bob sent 12 messages with the same content.",
          "Bob’s co-worker replied to Bob’s email.",
          "Bob emailed his co-worker asking for details about a project they are working on."
        ]],
        [[ // 2
          "Bob’s co-worker",
          "Bob’s co-worker, Bob",
          "No one",
          "Bob"
        ]],
        [[ // 4
          "Project",
          "Online chatroom",
          "Facebook",
          "E-mail"
        ]],
        [[ // 4
            "Remember the Human",
            "Adhere to the same standards of behavior online that you follow in real life",
            "Don’t abuse your power",
            "Respect other people’s privacy"
        ]]
      ],
      answersOrder: [[0], [3], [1], [3], [3]],
      labors: [
            "Bob’s co-worker got annoyed of Bob’s action because Bob could not wait for his reply while he was in a meeting. ",
            "Bob’s co-worker told him that he will be having a meeting later on that day.",
            "Bob waited for his co-worker’s reply for 5 minutes but he did not receive any reply. ",
            "Bob’s co-worker quit from the project and this left Bob to work on the project on his own.",
            "Bob emailed his co-worker asking for details about a project they are working on.",
            "Bob sent 12 messages to his co-worker with the same content saying that “Hi, please send me the details of the project ASAP.” ",
            "There was tension between the working relationship of Bob and his co-worker. "
      ],
      laborsOrder: [1, 4, 2, 5, 0, 6, 3],
      correctLabors: [
            {
              old: "Bob’s co-worker told him that he will be having a meeting later on that day.",
              new: "-"
            }, {
              old: "Bob emailed his co-worker asking for details about a project they are working on.",
              new: "-"
            }, {
              old: "Bob waited for his co-worker’s reply for 5 minutes but he did not receive any reply. ",
              new: "-"
            }, {
              old: "Bob sent 12 messages to his co-worker with the same content saying that “Hi, please send me the details of the project ASAP.” ",
              new: "Bob did not send 12 messages to his co-worker with the same content saying that “Hi, please send me the details of the project ASAP.” "
            }, {
              old: "Bob’s co-worker got annoyed of Bob’s action because Bob could not wait for his reply while he was in a meeting. ",
              new: "Bob’s co-worker did not get annoyed of Bob’s action because Bob could wait for his reply while he was in a meeting. "
            }, {
              old: "There was tension between the working relationship of Bob and his co-worker. ",
              new: "There was no tension between the working relationship of Bob and his co-worker."
            }, {
              old: "Bob’s co-worker quit from the project and this left Bob to work on the project on his own.",
              new: "Bob’s co-worker did not quit from the project and this did not left Bob to work on the project on his own."
            }
      ],
      correctRules: [
        {
          title: "Respect other people’s time and bandwidth",
          description: "Be considerate of other people’s time on the internet. Send only important things and to only those who need it.",
          highlights: [3]
        }
      ],
      negateStop: 2,
      solution: "Bob should have not sent 12 messages to his co-worker containing the same content and waited " +
                "longer for his co-worker’s reply. Do not send or post  multiple messages of the same content and " +
                "do not expect that others will instantaneously reply to your questions or concerns."
    },
    {
      scenario: "Karen and Greg are bestfriends and luckily, seatmates in class. While in " +
                "class, Greg browsed through Karen’s iphone gallery without her consent, " +
                "while Karen was in the restroom, and found photos of Karen wearing a facial " +
                "mask.  Greg thought it was funny and shared it also to their other friends by " +
                "sending it through Telegram (an online messaging app). When Karen got back in " +
                "class, she found out that the photos of her already spread out to her friends. " +
                "She got mad at Greg for invading her privacy and sharing her photos to their " +
                "friends without her permission.",
      answers: [
        [[ // 4
          "Classmates",
          "Karen, Greg, and Friends",
          "Karen, Greg",
          "Friends"
        ]],
        [[ // 3
          "Karen went to the restroom",
          "Greg shared Karen’s photo to their friends through Telegram",
          "Greg browsed through Karen’s phone gallery without her consent",
          "Karen went back to class"
        ]],
        [[ // 3
          "Friends",
          "Greg",
          "Karen, Greg, and Friends",
          "Classmates"
        ]],
        [[ // 2
          "iMessage, Telegram",
          "iPhone, Telegram",
          "Facebook, Telegram",
          "Instagram, iPhone"
        ]],
        [[ // 1
            "Respect other people’s privacy",
            "Adhere to the same standards of behavior online that you follow in real life",
            "Remember the human",
            "Help keep flame wars under control"
        ]]
      ],
      answersOrder: [[3], [2], [2], [1], [0]],
      labors: [
            "When Karen got back in class, she found out that the photos of her already spread out to her friends.",
            "While in class, Greg browsed through Karen’s iphone gallery without her consent, while Karen was in the restroom, and found photos of Karen wearing a facial mask.",
            "Greg shared it also to their other friends by sending it through Telegram (an online messaging app).",
            "She got mad at Greg for invading her privacy and sharing her photos to their friends without her permission. "
      ],
      laborsOrder: [1, 2, 0, 3],
      correctLabors: [
            {
              old: "While in class, Greg browsed through Karen’s iphone gallery without her consent, while Karen was in the restroom, and found photos of Karen wearing a facial mask.",
              new: "While in class, Greg did not browse through Karen’s iphone gallery without her consent, while Karen was in the restroom, and did not find photos of Karen wearing a facial mask. "
            }, {
              old: "Greg shared it also to their other friends by sending it through Telegram (an online messaging app). ",
              new: "Greg did not share it to their other friends by sending it through Telegram (an online messaging app). "
            }, {
              old: "When Karen got back in class, she found out that the photos of her already spread out to her friends. ",
              new: "When Karen got back in class, she found out that the photos of her did not spread out to her friends. "
            }, {
              old: "She got mad at Greg for invading her privacy and sharing her photos to their friends without her permission. ",
              new: "She did not get mad at Greg for not invading her privacy and not sharing her photos to their friends without her permission."
            }
      ],
      correctRules: [
        {
          title: "Respect other people’s privacy",
          description: "Never ask someone's information that you are not comfortable giving out yourself and do not get someone's private information without permission",
          highlights: [0]
        }
      ],
      negateStop: -1,
      solution: "Greg should have not browsed through Karen’s phone without her consent and he should " +
                "have not shared the photo of Karen which is not meant for the public. Do not access " +
                "information that is not meant to be public or not meant for them to be read without " +
                "the full consent of the owner and respect the person’s online privacy as you would " +
                "respect the person’s privacy in real life."
    },
    {
      scenario: "Jamie surfed the Net for a while. He came across a site that he thought was funny. " +
                "He was amused by it and forwarded it on the CONNEX, a learning platform intended to " +
                "provide students a way to discuss topics relevant to the course when they are outside " +
                "the classroom. Unfortunately, not everyone in his class was amused by the humor and it " +
                "was not appropriate for CONNEX. They brought this to the attention of the teacher and " +
                "the Dean of Students.",
      answers: [
        [[ // 1
          "Jamie, people in CONNEX",
          "Teacher",
          "Dean of students",
          "People in connex, dean of students"
        ]],
        [[ // 4
          "The students brought it to the attention of the teacher and the dean",
          "Jaime surfed the Net",
          "Jaime came across a funny site",
          "Jamie forwarded a site to CONNEX"
        ]],
        [[ // 3
          "Jaime",
          "CONNEX",
          "Jaime, people in CONNEX, teacher, dean of students",
          "Dean of students"
        ]],
        [[ // 2
          "Funny site",
          "CONNEX",
          "Net",
          "Classroom"
        ]],
        [[ // 1
            "Know where you are in cyberspace",
            "Be forgiving of other people’s mistake",
            "Respect other people’s privacy",
            "Share expert knowledge"
        ]]
      ],
      answersOrder: [[0], [3], [2], [1], [0]],
      labors: [
            "He was amused by it and forwarded it on the CONNEX.",
            "While in class, Greg browsed through Karen’s iphone gallery without her consent, while Karen was in the restroom, and found photos of Karen wearing a facial mask.",
            "The students or other people in CONNEX  brought this to the attention of the teacher and the Dean of Students.",
            "He came across a site that he thought was funny."
      ],
      laborsOrder: [1, 3, 0, 2],
      correctLabors: [
            {
              old: "Jamie surfed the Net for a while.",
              new: "-"
            }, {
              old: "He came across a site that he thought was funny.",
              new: "-"
            }, {
              old: "He was amused by it and forwarded it on the CONNEX.",
              new: "He was amused by it and did not forward it on the CONNEX."
            }, {
              old: "The students or other people in CONNEX  brought this to the attention of the teacher and the Dean of Students.",
              new: "They students or other people in CONNEX did not  bring this to the attention of the teacher and the Dean of Students."
            }
      ],
      correctRules: [
        {
          title: "Know where you are in cyberspace",
          description: "Follow the rules of the domain and act accordingly to those rules while in that domain.",
          highlights: [2]
        }
      ],
      negateStop: 1,
      solution: "Jaime should have not forwarded the site to CONNEX. Always be mindful where you " +
                "are in the cyberspace and adapt to the surroundings. Do not post content that is " +
                "not appropriate to the domain."
    },
    {
      scenario: "Abner is part of the debate team in his school. He is a good speaker or debater because " +
                "he always has strong opinions on different important matters. One day, one of his classmates, " +
                "Peter, shared a news article criticizing the United Nations Organization lack of action towards " +
                "the Syrian bombings. However, Abner disagreed with the article and Peter’s opinion about it. So, he " +
                "commented on Peter’s post and shared his insights. Peter responded to oppose Abner’s comment in a " +
                "calm manner. Although, Abner found Peter’s reply very unintelligent so, he responded in a haughty " +
                "manner to counter Peter’s reply and strongly insisted that Peter’s opinions were wrong and lack evidence.",
      answers: [
        [[ // 4
          "Peter",
          "Abner",
          "Syrians",
          "Abner and Peter"
        ]],
        [[ // 3
          "Peter replied an unintelligent remark which made Abner respond in a haughty manner and criticize Peter’s thinking capabilities.",
          "Abner is part of the debate team and is a good speaker because he always has strong opinions on different important matters.",
          "Peter shared a news article criticizing the United Nations Organization lack of action towards the Syrian bombings",
          "Abner disagreed with the article and peter’s opinion about it so he commented on Peter’s post and shared his insights"
        ]],
        [[ // 1
          "Abner and Peter",
          "Abner",
          "Peter",
          "Syrians"
        ]],
        [[ // 2
          "Inquirer",
          "Facebook",
          "Snapchat",
          "Twitter"
        ]],
        [[ // 1
            "Help keep flame wars under control",
            "Be forgiving of other people’s mistake",
            "Respect other people’s privacy",
            "Share expert knowledge"
        ]]
      ],
      answersOrder: [[3], [2], [0], [1], [0]],
      labors: [
            "Abner disagreed with the article and Peter’s opinion about it.",
            "Peter responded to oppose Abner’s comment in a calm manner. ",
            "Peter got offended and the conversation became more heated and the situation escalated quickly.",
            "Peter, shared a news article criticizing the United Nations Organization lack of action towards the Syrian bombings. ",
            "Abner commented on Peter’s post and shared his insights. ",
            "Abner found Peter’s reply very unintelligent so, he responded in a haughty manner to counter Peter’s reply and strongly insisted that Peter’s opinions were wrong and lack evidence. "
      ],
      laborsOrder: [ 3, 0, 4, 1, 5, 2 ],
      correctLabors: [
            {
              old: "Peter got offended and the conversation became more heated and the situation escalated quickly.",
              new: "-"
            }, {
              old: "Abner disagreed with the article and Peter’s opinion about it.",
              new: "-"
            }, {
              old: "Abner commented on Peter’s post and shared his insights. ",
              new: "-"
            }, {
              old: "Peter responded to oppose Abner’s comment in a calm manner. ",
              new: "-"
            }, {
              old: "Abner found Peter’s reply very unintelligent so, he responded in a haughty manner to counter Peter’s reply and strongly insisted that Peter’s opinions were wrong and lack evidence. ",
              new: "Abner found Peter’s reply very unintelligent so, he did not respond in a haughty manner to counter Peter’s reply and did not strongly insist that Peter’s opinions were wrong and lack evidence."
            }, {
              old: "Peter got offended and the conversation became more heated and the situation escalated quickly.",
              new: "Peter did not get offended and the conversation did not become more heated and the situation did not escalate quickly."
            }
      ],
      correctRules: [
        {
          title: "Help Keep Flame Wars Under Control",
          description: "Keep the camaraderie in discussions online.",
          highlights: [4]
        }
      ],
      negateStop: 3,
      solution: "Abner should have responded in a haughty manner to counter Peter’s reply " +
                "and calmly insisted that Peter’s opinions were wrong and lack evidence." +
                "If you are the one being flamed, always reply in a mature manner and do not " +
                "destroy the camaraderie in the discussion by adding fuel to the fire. If you " +
                "disagree on one’s opinion or statement, do it in a calm and polite way."
    }, {
      scenario: "A secretary on the campus of a tax-supported university was on sick leave. " +
                "The secretary’s supervisor has a lot of work to do for their upcoming project. " +
                "The supervisor accessed  the secretary’s e-mail using the admin password to see " +
                "if departmental-related mail is coming in. Accidentally, the supervisor clicked " +
                "on an e-mail from a university. However, she did not bother to read it and " +
                "closed the window because there was a lot of e-mail coming in. The following day, " +
                "the secretary did not see the e-mail from the university regarding her application " +
                "for masters studies. A few more weeks passed by and the secretary received an " +
                "e-mail from the university that they already gave her slot to another applicant " +
                "because she wasn’t able to confirm her application before the deadline. ",
      answers: [
        [[ // 2
          "University",
          "Secretary and supervisor",
          "Supervisor",
          "Secretary and university"
        ]],
        [[ // 2
          "When the supervisor accidentally clicked on an e-mail from a university.",
          "When the supervisor accessed the secretary’s e-mail account using the admin password.",
          "When the supervisor didn’t bother to read the e-mail she accidentally clicked.",
          "When the secretary was not able to confirm to through e-mail"
        ]],
        [[ // 1
          "Secretary and superviser",
          "The other applicant",
          "Supervisor",
          "Secretary"
        ]],
        [[ // 2
          "Admin password",
          "E-mail account",
          "Secretary's password",
          "Department e-mails"
        ]],
        [[ // 1
            "Don’t abuse your power",
            "Be forgiving of other people’s mistake",
            "Respect other people’s privacy",
            "Share expert knowledge"
        ]]
      ],
      answersOrder: [[1], [1], [0], [1], [0]],
      labors: [
            "The secretary’s supervisor has a lot of work to do for their upcoming project. ",
            "Accidentally, the supervisor clicked on an e-mail from a university. ",
            "The secretary received an e-mail from the university that they already gave her slot to another applicant because she wasn’t able to confirm her application before the deadline. ",
            "A secretary on the campus of a tax-supported university was on sick leave.",
            "The supervisor accessed  the secretary’s e-mail using the admin password to see if departmental-related mail is coming in. ",
            "The following day, the secretary did not see the e-mail from the university regarding her application for masters studies. "
      ],
      laborsOrder: [ 3, 0, 4, 1, 5, 2 ],
      correctLabors: [
            {
              old: "A secretary on the campus of a tax-supported university was on sick leave. ",
              new: "-"
            }, {
              old: "The secretary’s supervisor has a lot of work to do for their upcoming project. ",
              new: "-"
            }, {
              old: "The supervisor accessed the secretary’s e-mail using the admin password to see if departmental-related mail is coming in. ",
              new: "The supervisor did not access the secretary’s e-mail using the admin password to see if departmental-related mail is coming in."
            }, {
              old: "Accidentally, the supervisor clicked on an e-mail from a university. ",
              new: "The supervisor did not accidentally click on an e-mail from a university. "
            }, {
              old: "The following day, the secretary did not see the e-mail from the university regarding her application for masters studies. ",
              new: "The following day, the secretary saw the e-mail from the university regarding her application for masters studies."
            }, {
              old: "The secretary received an e-mail from the university that they already gave her slot to another applicant because she wasn’t able to confirm her application before the deadline. ",
              new: "The secretary did not receive an e-mail from the university that they already gave her slot to another applicant because she was able to confirm her application before the deadline. "
            }
      ],
      correctRules: [
        {
          title: "Don’t abuse your power",
          description: "Respect your subordinate’s online privacy.",
          highlights: [2]
        }
      ],
      negateStop: 1,
      solution: "The supervisor should have not used the admin password to access her " +
                "secretary’s email account without the secretary’s knowledge. Do not abuse " +
                "your power to access your subordinate’s e-mail account "
    }, {
      // case # 8
    }, { // template if 2
      // scenario: "While you were in Middle School, you often use swear words on twitter. Whenever you tweet, " +
      //           "there were always swear words included. Most of your followers got put off because of your " +
      //           "behavior online and even your cousins, who follows you, saw your tweets full of curse words. " +
      //           "Your behavior online was found out by your parents through your cousins. Because of this, your " +
      //           "parents got disappointed and grounded you for a week and no longer allowed you to use any kind " +
      //           "of social media. ",
      // answers: [  // correct answers should be placed 3, 1, 4, 4, 2
      //   [[     // 3
      //     "Your followers",
      //     "Cousins and your parents",
      //     "You, cousins, your parents",
      //     "Cousins"
      //   ]],
      //   [[ // 1
      //     "You often use swear words in your tweets",
      //     "You often use Twitter",
      //     "You tweet uninteresting things",
      //     "Your cousins told your parents about your behavior on Twitter"
      //   ]],
      //   [[ // 4
      //     "Cousins, you, parents",
      //     "You",
      //     "Parents",
      //     "You, your followers, Parents"
      //   ]],
      //   [[ // 4
      //     "Snapchat",
      //     "Instagram",
      //     "Facebook",
      //     "Twitter"
      //   ]],
      //   [
      //     [ // 2
      //       "Remember the Human",
      //       "Make yourself look good online",
      //       "Don’t abuse your power",
      //       "Adhere to the same standards of behavior online that you follow in real life"
      //     ],
      //     [
      //       "Remember the Human",
      //       "Make yourself look good online",
      //       "Don’t abuse your power",
      //       "Adhere to the same standards of behavior online that you follow in real life"
      //     ]
      //   ]
      // ],
      // answersOrder: [[2], [0], [3], [3], [1, 3]],
      // labors: [
      //       "Whenever you tweet, you include swear words.",
      //       "Your parents got disappointed and grounded you for a week and no longer allowed you to use any kind of social media.",
      //       "Most of your followers got put off because of your behavior online and even your cousins, who follows you, saw your tweets full of curse words.",
      //       "Your behavior online was found out by your parents through your cousins. "
      // ],
      // laborsOrder: [0, 2, 3, 1],
      // correctLabors: [
      //       {
      //         old: "Whenever you tweet, you include swear words.",
      //         new: "Whenever you tweet, you do not include swear words."
      //       }, {
      //         old: "Most of your followers got put off because of your behavior online and even your cousins, who follows you, saw your tweets full of curse words. ",
      //         new: "Whenever you tweet, you do not include swear words."
      //       }, {
      //         old: "Your behavior online was found out by your parents through your cousins.",
      //         new: "Your behavior online was not found out by your parents through your cousins. "
      //       }, {
      //         old: "Your parents got disappointed and grounded you for a week and no longer allowed you to use any kind of social media. ",
      //         new: "Your parents did not get disappointed and grounded you for a week and allowed you to use any kind of social media.  "
      //       }
      // ],
      // correctRules: [
      //   {
      //     title: "Respect other people’s privacy",
      //     description: "Never ask someone's information that you are not comfortable giving out yourself and do not get someone's private information without permission",
      //     highlights: [0]
      //   }, {
      //     title: "SECONDO ASKHDSD Make yourself look good online",
      //     description: "Be presentable on the internet by only posting accurate and logical things.",
      //     highlights: [0]
      //   },
      // ],
      // negateStop: -1,
      // solution: "You should not use swear words as much as possible, especially when online where other people " +
      //           "can see it. People might see it as an inappropriate behavior and could reflect their judgement " +
      //           "of your character. Do not use offensive language and it is better to keep your reputation or self " +
      //           "image good online where a lot of people could see your posts, tweets, and profile. "
    }
  ]
  };
});
