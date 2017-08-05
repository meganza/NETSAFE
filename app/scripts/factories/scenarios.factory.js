angular.module('Netsafe').factory('ScenariosFactory', function() {
  return {
    content: [
    {
      scenario: "While you were in Middle School, you often use swear words on Twitter. " +
                "Whenever you tweet, there were always swear words included. Most of your " +
                "followers got put off because of your behavior online and even your cousins, " +
                "who follows you, saw your tweets full of curse words. Your cousins sent a " +
                "screenshot of your tweets to your parents via Facebook and your behavior online " +
                "was found out by your parents. Because of this, your parents got disappointed and " +
                "grounded you for a week and no longer allowed you to use any kind of social media.",
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
          "You, cousins, your followers, parents"
        ]],
        [[ // 4
          "Snapchat",
          "Instagram",
          "Facebook",
          "Twitter and Facebook"
        ]],
        [[ // 2
            "Remember the Human",
            "Make yourself look good online",
            "Don’t abuse your power",
            "Adhere to the same standards of behavior online that you follow in real life"
        ]]
      ],
      answersOrder: [[2], [0], [3], [3], [1]],
      additionalDetails: [
        {name: "Netizens: You, cousins, and your parents"},
        {name: ""},
        {name: "Netizens: You, cousins, your followers, parents"},
        {name: ""}
      ],
      labors: [
            "Whenever you tweet, you include swear words.",
            "Your parents got disappointed and grounded you for a week and no longer allowed you to use any kind of social media.",
            "Most of your followers got put off because of your behavior online and even your cousins, who follows you, saw your tweets full of curse words.",
            "Your cousins sent a screenshot of your tweets to your parents via Facebook and your behavior online was found out by your parents."
      ],
      laborsOrder: [0, 2, 3, 1],
      correctLabors: [
            {
              old: "Whenever you tweet, you include swear words.",
              new: "Whenever you tweet, you do not include swear words."
            }, {
              old: "Most of your followers got put off because of your behavior online and even your cousins, who follows you, saw your tweets full of curse words. ",
              new: "Most of your followers did not get put off because of your behavior online and even your cousins, who follows you, did not see your tweets full of curse words."
            }, {
              old: "Your cousins sent a screenshot of your tweets to your parents via Facebook and your behavior online was found out by your parents.",
              new: "Your cousins did not send a screenshot of your tweets to your parents via Facebook and your behavior online was not found out by your parents. "
            }, {
              old: "Your parents got disappointed and grounded you for a week and no longer allowed you to use any kind of social media. ",
              new: "Your parents did not get disappointed and did not ground you for a week and allowed you to use any kind of social media. "
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Make yourself look good online",
          description: "Don’t use offensive language",
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
      scenario: "Adam is a freshman in his school’s Senior High Program. Being aware that he " +
                "is a forgetful person, Adam saves the password and email given to him by the " +
                "school in his phone (which has no password-lock), confident that it will be on " +
                "his person at all times when he is not using it. However, during class, he is " +
                "suddenly called to the counseling office. In his haste, he leaves his books and " +
                "phone, facing down the table, in class and goes to the office. Christian, another " +
                "new student, was curious what Adam’s email and password is so he looked through " +
                "Adam’s phone. When Adam gets back, the class is dismissed, everyone is leaving, " +
                "and his phone is lighted up and facing up the table.",
      answers: [
        [[ // 4
          "Adam, counsellor",
          "Anonymous person, school",
          "Adam",
          "Adam and Christian"
        ]],
        [[ // 3
          "Adam leaves his books and phone in class",
          "Adam speaks to his new schoolmate",
          "Adam saves his password and e-mail in his phone",
          "Adam arrives at his new school"
        ]],
        [[ // 3
          "Adam and the anonymous person",
          "Adam and his new classmate",
          "Adam and Christian",
          "Adam and his counsellor"
        ]],
        [[ // 1
          "Phone",
          "E-mail",
          "School",
          "Password"
        ]],
        [[ // 4
            "Respect other people's time and bandwidth",
            "Be forgiving of other people's mistakes",
            "Don’t abuse your power",
            "Respect other people's privacy"
        ]]
      ],
      answersOrder: [[3], [2], [2], [0], [3]],
      additionalDetails: [
        {name: "Owner: Adam; Infiltrator: Christian"},
        {name: ""},
        {name: "Owner: Adam; Infiltrator: Christian"},
        {name: ""}
      ],
      labors: [
            "Christian looks through Adam’s phone out of his curiosity in Adam’s email and password.",
            "He is suddenly called to the guidance counsellor’s office so he rushes there.",
            "Adam saves his password and email given to him by the school in his phone because he is forgetful. ",
            "When Adam gets back, his phone is lighted up and facing up the table."
      ],
      laborsOrder: [2, 1, 0, 3],
      correctLabors: [
            {
              old: "Adam saves his password and email given to him by the school in his phone because he is forgetful.",
              new: "-"
            }, {
              old: "He is suddenly called to the guidance counsellor’s office so he rushes there.",
              new: "-"
            }, {
              old: "Christian looks through Adam’s phone out of his curiosity in Adam’s email and password. ",
              new: "Christian doesn’t  look through Adam’s phone out of his curiosity in Adam’s e-mail and password."
            }, {
              old: "When Adam gets back, his phone is lighted up and facing up the table.",
              new: "When Adam gets back, his phone is not lighted up and not facing up the table."
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Respect other people's privacy",
          description: "Don't access information that is not meant to be public or not meant for them to be read",
          highlights: [3]
        }
      ],
      negateStop: 2,
      solution: "Christian should have not looked through Adam’s phone out of his curiosity without the knowledge " +
                "of Adam. Personal devices tend to contain information that are not meant to be accessed by the public " +
                "or other people. "
    },
    {
      scenario: "Bob emailed his co-worker asking for details about a project " +
                "they are working on. Bob waited for his co-worker’s reply for 5 minutes but he did " +
                "not receive any reply. Because of this, Bob sent 12 consecutive messages within 10 " +
                "minutes to his co-worker with the same content saying that ",
      italic: " “Hi, please send me the details of the project ASAP.” ",
      scenariocont: "Bob’s co-worker got annoyed of Bob’s actions because " +
                "Bob could not wait for his reply while he was in a meeting. This caused a tension between " +
                "their working relationship. Bob’s co-worker quit from the project and this left Bob to work " +
                "on the project on his own.",
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
            "Respecting other people's time and bandwidth"
        ]]
      ],
      answersOrder: [[0], [3], [1], [3], [3]],
      additionalDetails: [
        {name: "Sender: Bob’s co-worker; Receiver: Bob"},
        {name: ""},
        {name: "Sender: Bob’s co-worker; Receiver: Bob"},
        {name: ""}
      ],
      labors: [
            "Bob’s co-worker got annoyed of Bob’s action because Bob could not wait for his reply while he was in a meeting. ",
            "Bob waited for his co-worker’s reply for 5 minutes but he did not receive any reply. ",
            "Bob’s co-worker quit from the project and this left Bob to work on the project on his own.",
            "Bob emailed his co-worker asking for details about a project they are working on.",
            "Bob sent 12 messages to his co-worker with the same content saying that “Hi, please send me the details of the project ASAP.” ",
            "There was tension between the working relationship of Bob and his co-worker. "
      ],
      laborsOrder: [3, 1, 4, 0, 5, 2],
      correctLabors: [
            {
              old: "Bob emailed his co-worker asking for details about a project they are working on.",
              new: "-"
            }, {
              old: "Bob waited for his co-worker’s reply for 5 minutes but he did not receive any reply. ",
              new: "-"
            }, {
              old: "Bob sent 12 consecutive messages within 10 minutes to his co-worker with the same content saying that “Hi, please send me the details of the project ASAP.” ",
              new: "Bob did not send 12 consecutive messages within 10 minutes to his co-worker with the same content saying that “Hi, please send me the details of the project ASAP.” "
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
          id: 0,
          title: "Respect other people’s time and bandwidth",
          description: "Don't expect that others will instantaneously respond to your questions and concerns and don't post / send similar content multiple times",
          highlights: [2]
        }
      ],
      negateStop: 1,
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
        [[ // 3
          "Classmates",
          "Karen, Greg, and Friends",
          "Karen and Greg",
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
      answersOrder: [[2], [2], [2], [1], [0]],
      additionalDetails: [
        {name: "Owner: Karen; Infiltrator: Greg"},
        {name: ""},
        {name: "Owner: Karen; Infiltrator: Greg"},
        {name: ""}
      ],
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
          id: 0,
          title: "Respect other people’s privacy",
          description: "Never ask someone's information that you are not comfortable giving out yourself and do not get someone's private information without permission",
          highlights: [0, 1]
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
      scenario: "Jaime was amused by a GIF (Graphic Interchange Format) of a jumpscare where a " +
                "Chuckie doll pops out. Jaime forwarded it on CONNEX. CONNEX is a learning platform " +
                "intended to provide students a way to discuss topics relevant to the course, which is " +
                "chemistry, when they are outside the classroom. Their teacher is also a part of the " +
                "CONNEX as the administrator. Unfortunately, everyone in his class found Jaime’s post " +
                "inappropriate and irrelevant to CONNEX. They brought this to the attention of the teacher.",
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
          "Jaime, people in CONNEX, teacher",
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
      additionalDetails: [
        {name: "Netizens: Jaime, people in CONNEX"},
        {name: ""},
        {name: "Netizens: Jaime, people in CONNEX"},
        {name: ""}
      ],
      labors: [
            "Everyone in his class found Jaime’s post inappropriate and irrelevant to CONNEX.",
            "The students brought this to the attention of the teacher.",
            "Jaime was amused by a GIF containing a jumpscare and forwarded it to CONNEX."
      ],
      laborsOrder: [2, 0, 1],
      correctLabors: [
            {
              old: "Jaime was amused by a GIF containing a jumpscare and forwarded it to CONNEX.",
              new: "Jaime was amused by a GIF containing a jumpscare but did not forward it to CONNEX."
            }, {
              old: "Everyone in his class found Jaime’s post inappropriate and irrelevant to CONNEX.",
              new: "Everyone in his class did not find Jaime’s post inappropriate and irrelevant to CONNEX."
            }, {
              old: "The students brought this to the attention of the teacher.",
              new: "The students did not bring this to the attention of the teacher."
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Know where you are in cyberspace",
          description: "Follow the rules of the domain and act accordingly to those rules while in that domain.",
          highlights: [0]
        }
      ],
      negateStop: -1,
      solution: "Jaime shouldn’t have forwarded the jumpscare GIF to CONNEX. Always be mindful where " +
                "you are in the cyberspace and adapt to the surroundings. Do not post content that " +
                "is not appropriate to the domain."
    },
    {
      scenario: "Abner is part of the debate team in his school. He is a good speaker or debater " +
                "because he always has strong opinions on different important matters. One day, one of his " +
                "classmates, Peter, shared a news article on Facebook, where a lot people can see it, " +
                "criticizing the United Nations Organization lack of action towards the Syrian bombings. " +
                "However, Abner disagreed with the article and Peter’s opinion about it. So, he commented on " +
                "Peter’s post and shared his insights. Abner commented that the United Nations Organization is " +
                "working as hard as they can, and are already setting up meetings with different organizations, " +
                "the Syrian government, and other governments involved to try and alleviate the situation in Syria. " +
                "Peter responded to oppose Abner’s comment in a calm manner,",
      italic: "“People are dying. Why can’t they act sooner? I don’t care what you say. I think that they should be working harder.”",
      scenariocont: "Abner deemed Peter’s reply unwise so he haughtily responded, ",
      italiccont: "“Quit acting like you know what you’re talking about, Peter. You’re not even working for the United Nations Organization so just shut up.“ ",
      scenariofinal: "Abner strongly insisted that Peter’s opinions were thoughtless and pointless.",
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
          "Abner, Peter, and people in facebook",
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
      additionalDetails: [
        {name: "Senders: Abner and Peter; Receivers: Abner and Peter"},
        {name: ""},
        {name: "Senders: Abner and Peter; Receivers: Abner and Peter"},
        {name: ""}
      ],
      labors: [
            "Abner disagreed with the article and Peter’s opinion about it.",
            "Peter responded to oppose Abner’s comment in a calm manner. ",
            "Abner strongly insisted that Peter’s opinions were thoughtless and pointless.",
            "Peter, shared a news article criticizing the United Nations Organization lack of action towards the Syrian bombings. ",
            "Abner commented on Peter’s post and shared his insights. ",
            "Abner found Peter’s reply very unintelligent so, he responded in a haughty manner to counter Peter’s reply. "
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
              old: "Abner found Peter’s reply very unintelligent so, he responded in a haughty manner to counter Peter’s reply. ",
              new: "Abner found Peter’s reply very unintelligent so, he did not respond in a haughty manner to counter Peter’s reply."
            }, {
              old: "Abner strongly insisted that Peter’s opinions were thoughtless and pointless.",
              new: "Abner did not strongly insist that Peter’s opinions were thoughtless and pointless."
            }
      ],
      correctRules: [
        {
          id: 0,
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
    },
    {
      scenario: "Hans is one of the developers and system admin of their company’s Human Resources " +
                "Management System (HRMS). Hans accessed the system’s database to fix a bug report " +
                "found in the attendance tracking feature. Upon fixing the system, Hans saw that Luke’s " +
                "attendance logs we’re mostly tardy for the past few months. If this continues, Luke, one of " +
                "Han’s closest friends at work, will be under probation. Not wanting his friend to be under " +
                "probation, Hans changed some of Luke’s attendance logs to on-time. The HR personnel, who uses " +
                "the HRMS, found out what Hans did and reported it to the HR chairperson.",
      answers: [
        [[ // 2
          "Luke and HR chairperson",
          "Hans and HR personnel",
          "Luke and Hans",
          "Hans and HR chairperson"
        ]],
        [[ // 2
          "Hans saw that Luke’s attendance logs we’re mostly tardy for the past few months.",
          "Hans accessed the system’s database to fix a bug report. ",
          "Hans changed some of Luke’s attendance logs to on-time.",
          "The HR personnel finds out what Hans did and reported it to the HR chairperson."
        ]],
        [[ // 1
          "Hans, Luke, HR personnel, and HR chairperon",
          "Hans, Luke and HR personnel",
          "Luke and HR Chairperson",
          "HR Chairperson and HR personnel"
        ]],
        [[ // 2
          "Admin password",
          "Human resource Management System",
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
      additionalDetails: [
        {name: "Admin: Hans; Luke, HR personnel, and HR chairperon"},
        {name: ""},
        {name: "Subordinate: secretary; Admin: supervisor"},
        {name: ""}
      ],
      labors: [
            "The secretary’s supervisor has a lot of work to do for their upcoming project. ",
            "Accidentally, the supervisor clicked on an e-mail from a university. ",
            "The secretary received an e-mail from the university that they already gave her slot to another applicant because she wasn’t able to confirm her application before the deadline. ",
            "The supervisor accessed the secretary’s e-mail using the admin password to see if departmental-related mail is coming in without the secretary’s knowledge. ",
            "The following day, the secretary did not see the e-mail from the university regarding her application for masters studies. ",
            "The supervisor mistakenly clicked on the delete button instead of the back button."
      ],
      laborsOrder: [ 0, 3, 1, 5, 4, 2 ],
      correctLabors: [
            {
              old: "The secretary’s supervisor has a lot of work to do for their upcoming project. ",
              new: "-"
            }, {
              old: "The supervisor accessed the secretary’s e-mail using the admin password to see if departmental-related mail is coming in without the secretary’s knowledge. ",
              new: "The supervisor did not access the secretary’s e-mail using the admin password to see if departmental-related mail is coming in without the secretary’s knowledge."
            }, {
              old: "Accidentally, the supervisor clicked on an e-mail from a university. ",
              new: "The supervisor did not accidentally click on an e-mail from a university. "
            },{
              old: "The supervisor mistakenly clicked on the delete button instead of the back button.",
              new: "The supervisor did not mistakenly click on the delete button instead of the back button."
            },{
              old: "The following day, the secretary did not see the e-mail from the university regarding her application for masters studies. ",
              new: "The following day, the secretary saw the e-mail from the university regarding her application for masters studies."
            }, {
              old: "The secretary received an e-mail from the university that they already gave her slot to another applicant because she wasn’t able to confirm her application before the deadline. ",
              new: "The secretary did not receive an e-mail from the university that they already gave her slot to another applicant because she was able to confirm her application before the deadline. "
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Don’t abuse your power",
          description: "Respect your subordinate’s online privacy.",
          highlights: [2]
        }
      ],
      negateStop: 1,
      solution: "The supervisor should have not used the admin password to access her " +
                "secretary’s email account without the secretary’s knowledge. Do not abuse " +
                "your power to access your subordinate’s e-mail account "
    },
    {
      scenario: "A group of students have created a defamatory website about a classmate. His name is Marty. The website includes postings " +
                "that include made-up stories, jokes and cartoons involving the student. The site also " +
                "includes a place where visitors can post comments and an email link for people to send " +
                "their messages directly to the student. The group emails everyone in their class a link " +
                "to the site. One of the classmates sent the link of the website to Marty, informing him " +
                "about the website. Marty acted out due to anger and hurt by revealing bad things about the " +
                "group. The group got mad and started to state false information about Marty. Their " +
                "classmates started joining in, some of them against Marty and some of them against the " +
                "group, which made the situation get a lot bigger and a lot worse. ",
      answers: [
        [[ // 2
          "Marty and classmates",
          "The group, Marty, and classmates",
          "The group and Marty",
          "The group and classmates"
        ]],
        [[ // 4
          "When one of the classmates informed Marty about the website",
          "When Marty responded to them and told them to stop",
          "When the group emailed a link to all their classmates",
          "When the group made a defamatory website about Marty that had rude posts about him"
        ]],
        [[ // 1
          "Marty, the group, and classmates",
          "The group and Marty",
          "Marty and classmates",
          "The group and classmates"
        ]],
        [[ // 1
          "Email, website",
          "Email",
          "Website",
          "Facebook"
        ]],
        [
          [ // 3
            "Know where you are in cyberspace",
            "Make yourself look good online",
            "Remember the Human",
            "Adhere to the same standards of behavior online that you follow in real life"
          ],
          [ // 1
            "Respect people's time and bandwidth",
            "Adhere to the same standards of behavior online that you follow in real life",
            "Don’t abuse your power",
            "Share expert knowledge"
          ],
          [ //4
            "Respect other people's privacy",
            "Be forgiving of other people's mistakes",
            "Share expert knowledge",
            "Help keep flame wars under control"
          ]
        ]
      ],
      answersOrder: [[1], [3], [0], [0], [2, 0, 3]],
      additionalDetails: [
        {name: "Senders: The group, Marty, and classmates; Receivers: The group, Marty, and classmates"},
        {name: ""},
        {name: "Senders: The group, Marty, and classmates; Receivers: The group, Marty, and classmates"},
        {name: ""}
      ],
      labors: [
            "Their class started to join in which made the situation get a lot bigger and a lot worse, some on Marty’s side and some one the group’s side.",
            "The group responded by continuing to state false information about Marty.",
            "One of the classmates informed Marty about it.",
            "A group of students have created a defamatory website about their classmate Marty.",
            "The group sent it to the whole class.",
            "Marty acted out due to anger and hurt by revealing bad things about the group."
      ],
      laborsOrder: [ 3, 4, 2, 5, 1, 0],
      correctLabors: [
            {
              old: "A group of students have created a defamatory website about their classmate Marty.",
              new: "A group of students did not create a defamatory website about Marty."
            }, {
              old: "The group sent it to the whole class.",
              new: "The group did not send it to the whole class."
            }, {
              old: "One of the classmates informed Marty about it.",
              new: "One of the classmates did not inform Marty about it."
            }, {
              old: "Marty acted out due to anger and hurt by revealing bad things about the group.",
              new: "Marty did not act out due to anger and hurt by revealing bad things about the group."
            }, {
              old: "The group responded by continuing to state false information about Marty.",
              new: "The group did not respond by continuing to state false information about Marty."
            }, {
              old: "Their class started to join in which made the situation get a lot bigger and a lot worse, some on Marty’s side and some one the group’s side.",
              new: "Their class did not start to join and it did not make the situation a lot bigger and a lot worse."
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Remember the human",
          description: "Remembering the person on the other side of the screen",
          highlights: [0]
        }, {
          id: 1,
          title: "Respect People's time and bandwidth",
          description: "Be considerate of other people’s time on the internet. Send only important things and to only those who need it",
          highlights: [1]
        }, {
          id: 2,
          title: "Help keep flame wars under control",
          description: "Keep the camaraderie in discussions online",
          highlights: [3, 4, 5]
        }
      ],
      negateStop: -1,
      solution: "The group should not have responded by continuing to state false information about " +
                "Marty. Marty should not have acted  out due to anger and hurt by revealing bad " +
                "things about the group. The class should not have started to join in. The group " +
                "sent it to the whole class. A group of students created a defamatory website about " +
                "their classmate Marty."
    },
    {
     scenario: "After the terrorist attack in their town, many students and teachers from a " +
               "school in that town sent related email to the ",
     italic: "“all-student”",
     scenariocont: "and",
     italiccont: "“all-faculty”",
     scenariofinal: "mailing lists. It is implied that the messages contain only helpful information about the status " +
               "of faculty and students who were injured from the attack, and about ways the student body " +
               "and the faculty can help in the crisis. But Penelope sends a long email to the mailing list " +
               "about how she feels regarding the situation which would have been more appropriate in a blog " +
               "or a newsletter. The administration takes notice of her email and sends a personal email to Penelope " +
               "saying that she should refrain from sending unrelated emails and should only use it for the above " +
               "mentioned purposes only. This action was misinterpreted and taken badly by Penelope. So, she started " +
               "spreading rumors about the school administration being insensitive about students’ and faculty’s grief " +
               "using the school mailing list. Because of her retaliation online, Penelope received three weeks of detention.",
      answers: [
        [[ // 2
          "Penelope, faculty, and school admin",
          "Penelope, school, and school admin",
          "Penelope",
          "Penelope and faculty"
        ]],
        [[ // 4
          "Penelope sending the school mailing list about the school admin being insensitive about the students’ and faculty’s grief",
          "The school admin sending Penelope an email",
          "Penelope sending the email about her feelings on the situation that would have been more appropriate on a blog",
          "The school admin sending information to students and faculty"
        ]],
        [[ // 3
          "The school admin",
          "Penelope",
          "Penelope and school",
          "Recipients of Penelope’s email"
        ]],
        [[ // 4
          "Discussion Group",
          "Forum",
          "Website",
          "Email"
        ]],
        [
          [ // 4
            "Don't abuse your power",
            "Make yourself look good online",
            "Remember the Human",
            "Be forgiving of other people's mistakes"
          ],
          [ // 1
            "Know where you are in cyberspace",
            "Adhere to the same standards of behavior online that you follow in real life",
            "Don’t abuse your power",
            "Share expert knowledge"
          ],
          [ //2
            "Respect other people's privacy",
            "Respect people's time and bandwidth",
            "Share expert knowledge",
            "Help keep flame wars under control"
          ]
        ]
      ],
      answersOrder: [[1], [3], [2], [3], [3, 0, 1]],
      additionalDetails: [
        {name: "Sender/Netizen: Penelope; Receiver/Netizen: school and school admin"},
        {name: ""},
        {name: "Sender/Netizen: Penelope and school; Receiver/Netizen: Penelope and school"},
        {name: ""}
      ],
      labors: [
           "The school admin sends Penelope an email telling her that she should refrain from sending unrelated emails and should use it for school purposes only",
           "Penelope took it the wrong way and started spreading rumors about the school administration being insensitive about students and faculty’s grief using the school mailing list",
           "Students and teachers from a school in a town who had a recent terrorist attack send helpful information in the mailing list to each other",
           "Penelope sends an email about her feelings regarding the situation that would have been more appropriate on a personal blog",
           "Penelope receives three weeks of detention"
      ],
      laborsOrder: [2, 3, 0, 1, 4],
      correctLabors: [
            {
              old: "Students and teachers from a school in a town who had a recent terrorist attack send helpful information in the mailing list to each other",
              new: "-"
            }, {
              old: "Penelope sends an email about her feelings regarding the situation that would have been more appropriate on a personal blog",
              new: "Penelope does not send an email about her feelings regarding the situation that would have been more appropriate on a personal blog"
            }, {
              old: "The school admin sends Penelope an email telling her that she should refrain from sending unrelated emails and should use it for school purposes only",
              new: "The school admin does not take notice of this and does not send her an email that she should refrain from sending unrelated emails and should use it for school purposes only"
            }, {
              old: "Penelope took it the wrong way and started spreading rumors about the school administration being insensitive about students and faculty’s grief using the school mailing list",
              new: "Penelope did not take it the wrong way and did not start spreading rumors about the school administration being insensitive about students and faculty’s grief using the school mailing list"
            }, {
              old: "Penelope receives three weeks of detention",
              new: "Penelope does not receive three weeks of detention"
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Be forgiving of other people's mistakes",
          description: "Do not hold people’s mistakes that they’ve made online against them",
          highlights: [3]
        }, {
          id: 1,
          title: "Respect People's time and bandwidth",
          description: "Be considerate of other people’s time on the internet. Send only important things and to only those who need it",
          highlights: [1]
        }, {
          id: 2,
          title: "Know where you are in cyberspace",
          description: "Follow the rules of the domain and act accordingly to those rules while in that domain",
          highlights: [3]
        }
      ],
      negateStop: 0,
      solution: "Penelope should not have taken it the wrong way and should not have started " +
                "spreading rumors about the school administration being insensitive about students " +
                "and faculty’s grief using the school mailing list. Penelope should not have sent an " +
                "email about her feelings regarding the situation and should have just put it on a " +
                "personal blog or newsletter instead."
    },
    {
      scenario: "You and your friend are talking to each other about your love lives through chat " +
                "while taking a break from doing pair homework. You tell your friend that you are about " +
                "to go on a date with a guy you know from school and you are very excited about it. You " +
                "go outside to walk the dog and leave the phone at home. While you’re out, your phone " +
                "receives messages sent by your friend. Your classmate, who is your pair and stays at your " +
                "place to work on your homework,  gets curious from the constant buzzing and looks through " +
                "your phone. She sees your friend’s message that says",
      italic: " “That’s nice! What are you gonna wear when you meet Jack on your date this Friday?” ",
      scenariocont: " When you get back, your classmate tells you that " +
                "she is a close friend of Jack and started teasing you about your upcoming date.",
      answers: [
        [[ // 3
          "Your friends and your classmate",
          "You and your friend",
          "You, your friend, and your classmate",
          "You, your friend, and your mom"
        ]],
        [[ // 1
          "You and your friend are talking to each other about your love lives through chat",
          "Your mom reads the messages on your chat with your friend",
          "You are going on a date with Jack this Friday",
          "Your mom grounds you"
        ]],
        [[ // 4
          "Your friend",
          "Jack",
          "Your mom",
          "You, your friend, your classmate, and Jack"
        ]],
        [[ // 4
          "Text",
          "Instagram",
          "Facebook",
          "Chat messaging"
        ]],
        [[ // 2
            "Remember the Human",
            "Respect other people's privacy",
            "Don’t abuse your power",
            "Adhere to the same standards of behavior online that you follow in real life"
        ]]
      ],
      answersOrder: [[2], [0], [3], [3], [1]],
      additionalDetails: [
        {name: "Owner: You; Infiltrator: Your classmate"},
        {name: ""},
        {name: "Owner: You; Infiltrator: Your classmate"},
        {name: ""}
      ],
      labors: [
          "Your phone receives messages sent by your friend",
          "Your classmate teases you about your upcoming date",
          "You tell your friend that you are about to go on a date with a guy you know from school and you are very excited about it",
          "You and your friend are talking to each other about your love lives through chat while taking a break from doing pair homework",
          "Your classmate reads your friend’s message",
          "You go outside to walk the dog and leave the phone at home",
          "Your classmate gets curious from the constant buzzing and looks through your phone"
      ],
      laborsOrder: [ 3, 2, 5, 0, 6, 4, 1],
      correctLabors: [
            {
              old: "You and your friend are talking to each other about your love lives through chat while taking a break from doing pair homework",
              new: "-"
            }, {
              old: "You tell your friend that you are about to go on a date with a guy you know from school and you are very excited about it",
              new: "-"
            }, {
              old: "You go outside to walk the dog and leave the phone at home",
              new: "-"
            }, {
              old: "Your phone receives messages sent by your friend",
              new: "-"
            }, {
              old: "Your classmate gets curious from the constant buzzing and looks through your phone",
              new: "Your classmate gets curious from the constant buzzing and does not look through your phone"
            }, {
              old: "Your classmate reads your friend’s message",
              new: "Your classmate does not read your friend’s message"
            }, {
              old: "Your classmate teases you about your upcoming date",
              new: "Your classmate does not tease you about your upcoming date"
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Respect other people's privacy",
          description: "Don’t read other people’s personal messages or emails.",
          highlights: [5]
        }
      ],
      negateStop: 4,
      solution: "Your mom should not have looked through your phone and should not have read " +
                "your friend’s message to you. Do not read other people’s personal messages or emails."
    },
    {
      scenario: "George and Elijah are working together on a project and are communicating through email. " +
                "George has access to Elijah’s account for work purposes. They are workmates in the " +
                "IT department of their company. George is a system admin and Elijah works as a " +
                "tech support. Recently, George and Elijah had a misunderstanding about how to do " +
                "certain things with their jobs that escalated to a bigger fight. George took " +
                "advantage of his position at work and accessed Elijah’s company email account " +
                "and used Elijah’s email account to send spam messages to their co-workers to " +
                "get back at Elijah.",
      answers: [
        [[ // 2
          "George and the company",
          "George and Elijah",
          "Elijah and co-workers",
          "Elijah"
        ]],
        [[ // 4
          "George and Elijah email each other",
          "George sending emails through Elijah’s email",
          "George and Elijah had a misunderstanding",
          "George and Elijah are working together on a project"
        ]],
        [[ // 3
          "Co-workers",
          "Elijah and co-workers",
          "George, Elijah, and co-workers",
          "George and co-workers"
        ]],
        [[ // 4
          "Facebook",
          "Comany Platform",
          "Company databse",
          "Email"
        ]],
        [
          [ // 2
            "Make yourself look good online",
            "Don't abuse your power",
            "Remember the Human",
            "Be forgiving of other people's mistakes"
          ],
          [ // 1
            "Respect other people's time and bandwidth",
            "Adhere to the same standards of behavior online that you follow in real life",
            "Don’t abuse your power",
            "Share expert knowledge"
          ]
        ]
      ],
      answersOrder: [[1], [3], [2], [3], [1, 0]],
      additionalDetails: [
        {name: "Subordinate: Elijah; Admin / Sender: George"},
        {name: ""},
        {name: "Subordinate: Elijah; Admin: George; Sender: George; Receiver: co-workers"},
        {name: ""}
      ],
      labors: [
          "George accessed Elijah’s company email account and used it to send spam messages to their co-workmates to get back at Elijah",
          "George and Elijah has a misunderstanding about how to get their job done",
          "George and Elijah are working together on a project"
      ],
      laborsOrder: [2, 1, 0],
      correctLabors: [
            {
              old: "George and Elijah are working together on a project",
              new: "-"
            }, {
              old: "George and Elijah has a misunderstanding about how to get their job done",
              new: "-"
            }, {
              old: "George accessed Elijah’s company email account and used it to send spam messages to their co-workmates to get back at Elijah",
              new: "George did not access Elijah’s company email account and did not use it to send spam messages to their co-workmates to get back at Elijah"
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Don’t abuse your power",
          description: "Respect your subordinate’s online privacy",
          highlights: [2]
        }, {
          id: 1,
          title: "Respect People's time and bandwidth",
          description: "Be considerate of other people’s time on the internet. Send only important things and to only those who need it",
          highlights: [2]
        }
      ],
      negateStop: 1,
      solution: "George should not have accessed Elijah’s company email account. George should not have used it to send spam messages to their co-workmates to get back at Elijah."
    },
    {
      scenario: "Jake, a vlogger, uploaded a video on YouTube about the new trend in social media where " +
                "people do the ",
      italic: "“Ice Bucket Challenge”",
      scenariocont: " to raise awareness on disease known as Amyotrophic " +
                "Lateral Sclerosis (ALS). The video contained Jake simply discussing what the",
      italiccont: " “Ice Bucket Challenge” ",
      scenariofinal: " is a challenge where a person can either opt to pour ice on themselves or to donate " +
                "money to ALS Associations. He opted to not do the challenge but he ended his video by donating to " +
                "his local ALS Association. His followers got mad at him because they felt like he was ruining the " +
                "fun of the ice bucket challenge by not choosing to pour ice on himself. They started leaving toxic " +
                "comments in his video like calling him a coward and telling him that he should take down his video. " +
                "He took down his video and never talked about the challenge again.",
      answers: [
        [[     // 3
          "Jake’s Followers",
          "Jake",
          "Jake’s Followers and Jake",
          "Youtube"
        ]],
        [[ // 1
          "Jake uploaded a video about the 'Ice bucket challenge'",
          "Jake’s Followers left toxic comments on his video",
          "Jake donated to the ALS Association",
          "Jake’s Followers got mad at him"
        ]],
        [[ // 4
          "Jake",
          "Jake's Followers",
          "Youtube",
          "Jake’s Followers and Jake"
        ]],
        [[ // 4
          "Snapchat",
          "E-mail",
          "Facebook",
          "Youtube"
        ]],
        [[ // 2
            "Make yourself look good online",
            "Remember the Human",
            "Don’t abuse your power",
            "Adhere to the same standards of behavior online that you follow in real life"
        ]]
      ],
      answersOrder: [[2], [0], [3], [3], [1]],
      additionalDetails: [
        {name: "Sender: Jake’s followers; Receiver: Jake"},
        {name: ""},
        {name: "Sender: Jake’s followers; Receiver: Jake"},
        {name: ""}
      ],
      labors: [
            "Jake uploaded a video about the 'Ice Bucket Challenge'",
            "Jake took down the video and never talked about the “Ice Bucket Challenge” again",
            "Jake opted not to do the ice bucket challenge but he ended his video by donating to his local ASL Association",
            "Jake’s followers started leaving toxic comments on his video ",
            "Jake’s followers got mad at him for not doing the 'Ice Bucket Challenge'"
      ],
      laborsOrder: [0, 2, 4, 3, 1],
      correctLabors: [
            {
              old: "Jake uploaded a video about the 'Ice Bucket Challenge'",
              new: "-"
            }, {
              old: "Jake opted not to do the ice bucket challenge but he ended his video by donating to his local ASL Association",
              new: "-"
            }, {
              old: "Jake’s followers got mad at him for not doing the ‘Ice Bucket Challenge’",
              new: "- "
            }, {
              old: "Jake’s followers started leaving toxic comments on his video",
              new: "Jake’s followers did not leave toxic comments on his video"
            }, {
              old: "Jake took down the video and never talked about the “Ice Bucket Challenge” again",
              new: "Jake did not take down the video"
            }
      ],
      correctRules: [
        {
          id: 0,
          title: "Remember the Human",
          description: "Remembering the person on the other side of the screen",
          highlights: [3]
        }
      ],
      negateStop: 2,
      solution: "Jake’s followers should not leave toxic comments on his video. Do not say something " +
                "that could be considered mean or rude without thinking about it first."
    }
  ]
  };
});
