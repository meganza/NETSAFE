angular.module('Netsafe').factory('RulesFactory', function() {
  return {
    content: [
    {
      rule: "№1: Remember the Human",
      description: "Remembering the person on the other side of the screen.",
      dos: [
        "Remember you are interacting with people while exploring and expressing yourself on the internet.",
        "Before you say something, always ask: “Would you say this to the other person’s face?\" "
      ],
      donts: [
        "Forget that the recipient of your words is a human too.",
        "Say something that could be considered mean or rude without thinking about it first. ",
        "Say anything that could be saved and used against you."
      ],
      scenario: "Thomas is a budding digital artist. He is proud of his works so he posts his digital " +
                "artworks of rainforests on his Facebook page. An anonymous fellow wrote an email to Thomas " +
                "containing a message that says “Your art is trash and you should quit doing digital artworks.” " +
                "Thomas got hurt and his self confidence in his artistic skills diminished.",
      elements: [
        {name: "Sender and Receiver"},
        {name: "When the sender makes a statement or posted something on the online platform"},
        {name: "Sender and Receiver"},
        {name: "Online platform"}
      ],
      selements: [
        "Thomas (receiver) and anonymous fellow (sender)",
        "Thomas posting his digital work",
        "Thomas (receiver) and anonymous fellow (sender)",
        "E-mail and Facebook"
      ],
      labors: [
            {
              old: "Thomas posted his digital artworks on his Facebook page",
              new: "-"
            }, {
              old: "An anonymous fellow sent an email to Thomas containing a message that says 'Your art is trash and you should quit doing digital artworks.' ",
              new: "An anonymous fellow did not write an email to Thomas containing a message that says 'Your art is trash and you should quit doing digital artworks.'"
            }, {
              old: "Thomas got hurt and his self confidence in his artistic skills diminished",
              new: "Thomas did not get hurt and his self confidence in his artistic skills did not diminish."
            }
      ],
      solution: "The anonymous fellow should have not sent an email to Thomas that contained a message saying that " +
                "“Your art is trash and you should quit.”. The message in the email is something that you would not want " +
                "to say to another person’s face because it will hurt his/her feelings or it could be considered offensive to them.",
      highlights: [ 1 ],
      negateStop: 0
    }, {
      rule: "№2: Adhere To The Same Standards Of Behavior Online That You Follow In Real Life",
      description: "Online, you should follow the same ethics you follow in real life.",
      dos: [
        "Follow the law.",
        "Be ethical online.",
        "Be mindful of your actions on the internet."
      ],
      donts: [
        "Forget to exercise poor ethics. ",
        "Forget the consequences of your actions on the internet just because you aren’t seen.",
        "Do illegal actions."
      ],
      scenario: "The class submits their assignment online through Yahoo groups. Benedict saw that his " +
                "classmate has already submitted and he downloaded his classmate’s file. He copy-pasted some " +
                "of the content that his classmate wrote. When the results came back, they were both accused of " +
                "cheating or plagiarism and were both given zeros for the assignment by the teacher. ",
      elements: [
        {name: "Netizen/s"},
        {name: "When the netizen posts online"},
        {name: "Netizen/s"},
        {name: "Online platform"}
      ],
      selements: [
        "Benedict (Netizen)",
        "Submitting the assignment online",
        "Benedict and his classmate (Netizens), and the teacher",
        "Yahoo Groups"
      ],
      labors: [
            {
              old: "The class submits their assignment through Yahoo groups.",
              new: "-"
            }, {
              old: "Benedict saw that his classmate has already submitted and he downloaded his classmate’s file. ",
              new: "-"
            }, {
              old: "He copy-pasted some of the content that his classmate wrote.",
              new: "He did not copy-paste some of the content that his classmate wrote."
            }, {
              old: "They were both accused of cheating or plagiarism and were given zeros for the assignment",
              new: "They were not both accused of cheating or plagiarism and were not given zeros for the assignment"
            }
      ],
      solution: "Benedict should have not copy pasted some of the content that his classmate wrote. " +
                "Copy pasting or plagiarizing someone else’s work is unethical.",
      highlights: [ 2 ],
      negateStop: 1
    }, {
      rule: "№3: Know where you are in cyberspace",
      description: "Follow the rules of the domain and act according to those rules while in that domain.",
      dos: [
        "Be mindful of where you are on the internet.",
        "Adapt to your surroundings.",
        "Adhere to the behavior acceptable on the domain you are in.",
        "If you are new to that domain, observe the behavior of the netizens there."
      ],
      donts: [
        "Post rumors on news forums.",
        "Act untowardly to the netizens of that domain due to lack of observation beforehand.",
        "Post content that is not appropriate for the domain."
      ],
      scenario: "Martin is a current highschool student. He likes to use millennial words and phrases when texting " +
                "or chatting with his friends. He sends an email to his teacher asking about their class project " +
                "using the school email account issued to them. In his email, he used the words and phrases, “TBH”, " +
                "“on fleek”, “lit”, and “jk.” His teacher, a person who is fairly new to the internet, replied to his " +
                "email telling him that he cannot understand some of his terms and that he should be more professional " +
                "by using proper words when writing emails.",
      elements: [
        {name: "Netizen/s"},
        {name: "When you start participating in a new community online"},
        {name: "Netizen/s"},
        {name: "Online platform"}
      ],
      selements: [
        "Martin and teacher (Netizens)",
        "Martin sent an email to his teacher using millennial slang.",
        "Martin and teacher (Netizens)",
        "School email account"
      ],
      labors: [
            {
              old: "Martin sends an email to his teacher asking about their class project using the school email account issued to them.",
              new: "-"
            }, {
              old: "He used the words and phrases, “TBH”, “on fleek”, “lit”, and “jk” in writing the email.",
              new: "He did not use the words and phrases, “TBH”, “on fleek”, “lit”, and “jk” in writing the email."
            }, {
              old: "Martin’s teacher replied to his email telling him that he cannot understand some of his terms and to be more professional and use proper words when writing emails.",
              new: "Martin’s teacher replied to his email not telling him that he cannot understand some of his terms and to be more professional and use proper words when writing emails."
            }
      ],
      solution: "Martin should have not used millennial slang when writing an email to his teacher/s using " +
                "his school email account. Be mindful where you are on the internet and adhere to the acceptable " +
                "behavior in the domain. In this case, you are using a school email account to inquire " +
                "about your homework and it is expected that you shall use proper sentences and phrases when " +
                "corresponding with a faculty or staff in an academic institution.",
      highlights: [ 1 ],
      negateStop: 0
    }, {
      rule: "№4: Respect Other People’s Time and Bandwidth",
      description: "Be considerate of other people’s time on the internet. Send only important things and to only those who need it.",
      dos: [
        "Ensure that the long content you’re posting or sending is worth the time of the reader.",
        "Remember that no one is the center of cyberspace.",
        "Remember that not everyone will agree to what a person has to say no matter how much effort the person has put in making that post or comment.",
        "Send whatever you need to send to only those who actually need it."
      ],
      donts: [
        "Post similar content multiple times.",
        "Waste people’s time and bandwidth.",
        "Expect that others will instantaneously respond to your questions and concerns."
      ],
      scenario: "Trixie posted her problem with her code on an online discussion group, she made 10 posts " +
                "containing the same code in the span of 10 minutes so that people in the community would " +
                "notice her question. The other people in the discussion group got irritated by Trixie’s same " +
                "multiple posts because those covered up most of the discussion page of the group. Because of " +
                "this, one of the people in the community reported her account to the admin and then, Trixie got " +
                "blocked by the admin from the online discussion group.",
      elements: [
        {name: "Sender and/or receiver"},
        {name: "When you are sending information on the online platform"},
        {name: "Sender, receiver, and/or netizens in the online community"},
        {name: "Online platform"}
      ],
      selements: [
        "Trixie (sender), person in the discussion group, and admin (receivers)",
        "Trixie made 10 posts containing the same code in the span of 10 minutes on an online discussion group",
        "Trixie (sender), people in the discussion group, and admin (receivers)",
        "Online discussion group"
      ],
      labors: [
            {
              old: "Trixie made 10 posts containing the same code in the span of 10 minutes on an online discussion group",
              new: "Trixie did not make 10 posts containing the same code in the span of 10 minutes on an online discussion group"
            }, {
              old: "Other people got irritated of Trixie’s multiple same posts.",
              new: "Other people did not get irritated of Trixie’s multiple same posts."
            }, {
              old: "Other people got irritated by Trixie’s multiple same posts.",
              new: "Other people did not get irritated by Trixie’s multiple same posts."
            }, {
              old: "Trixie got blocked by the admin from the online discussion group.",
              new: "Trixie got blocked by the admin from the online discussion group."
            }
      ],
      solution: "Trixie should have not posted her problem with her code several times since posting it once would already be enough. " +
                "Do not post similar content multiple times because it tends to waste other people’s time and " +
                "bandwidth when loading the content. ",
      highlights: [ 0 ],
      negateStop: -1
    }, {
      rule: "№5: Make Yourself Look Good Online",
      description: "Be presentable on the internet by only posting accurate and logical things.",
      dos: [
        "Know what you are talking about.",
        "Make your posts as accurate and logical as possible.",
        "Try to keep posts as simple as possible."
      ],
      donts: [
        "Post information that could be considered inaccurate or illogical or both.",
        "Use offensive language.",
        "Make overly complicated posts that don’t make any sense."
      ],
      scenario: "George writes incoherent, grammatically incorrect, and offensively written " +
                "(due to swear words) diary entries on his blog. Other people have visited his blog " +
                "and have commented that his posts are indeed incoherent, grammatically incorrect, and " +
                "offensively written. This made George embarrassed. George deleted his blog.",
      elements: [
        {name: "Netizen/s"},
        {name: "When you are posting your own content on the online platform"},
        {name: "Netizen/s"},
        {name: "Online platform"}
      ],
      selements: [
        "George and other people commenting on his blog (Netizens)",
        "George writing diary entries on his blog",
        "George and other people commenting on his blog (Netizens)",
        "Blog"
      ],
      labors: [
            {
              old: "George writes incoherent, grammatically incorrect, and offensively written (due to swear words) diary entries on his blog.",
              new: "George did not write incoherent, grammatically incorrect, and offensively written (due to swear words) diary entries on his blog"
            }, {
              old: "Other people commented that his posts are indeed incoherent, grammatically incorrect, and offensively written due to swear words.",
              new: "Other people did not comment that his posts were incoherent, gramatically incorrect, and offensively written due to swear words."
            }, {
              old: "This made George embarrassed.",
              new: "This did not make George embarassed."
            }, {
              old: "George deleted his blog.",
              new: "George did not delete his blog."
            }
      ],
      solution: "George should not have written incoherent, grammatically incorrect, and offensively written " +
                "(due to swear words) diary entries on his blog. Do not post information that could be considered " +
                "inaccurate or illogical or both. Do not use offensive language. Do not make overly complicated " +
                "posts that don’t make any sense.",
      highlights: [ 0 ],
      negateStop: -1
    }, {
      rule: "№6: Share Expert Knowledge",
      description: "Do not share false information.",
      dos: [
        "Share information that you have to help others.",
        "Share results of answered questions to help people that might need the information.",
        "Post reliable sources that other people could look into."
      ],
      donts: [
        "Share false information.",
        "Post sources that could be considered unreliable.",
        "Be compliant in the spread of erroneous information online."
      ],
      scenario: "Justin posted a question on Stack Overflow, a programming forum, about a programming " +
                "problem for his project. Another user, Josh, who is a novice programmer, answered his " +
                "question quite confidently. However, Marc, an experienced computer programmer, passed " +
                "by Justin’s post and noticed that Josh’s answer to Justin’s question has a minor error. " +
                "Josh was not aware that his answer has a minor error. Despite knowing the correct solution, " +
                "Marc replied by intentionally adding more errors to the code such as removing a semicolon and " +
                "adding unused variables. Justin’s program did not run properly and got a low mark in his project.",

      elements: [
        {name: "Sender and/or receiver"},
        {name: "When you’re asking for or exchanging expert information"},
        {name: "Sender and receiver"},
        {name: "Online platform"}
      ],
      selements: [
        "Justin (receiver), Josh, and Marc (senders)",
        "Justin posted a programming question on Stack Overflow",
        "Justin (receiver), Josh, and Marc (senders)",
        "Stack Overflow"
      ],
      labors: [
            {
              old: "Justin posted a question on Stack Overflow about a programming problem that he needs help figuring out for his programming project.",
              new: "-"
            }, {
              old: "Josh, a novice at programming, answered Justin’s query confidently.",
              new: "-"
            }, {
              old: "Marc noticed that Josh’s answer was erroneous.",
              new: "-"
            }, {
              old: "Marc replied by intentionally adding more errors to the code.",
              new: "Marc did not intentionally add more errors to the code."
            }, {
              old: "Justin’s program did not run properly and he got a low mark for his project.",
              new: "Justin’s program ran properly and he did not get a low mark for his project."
            }
      ],
      solution: "Marc shouldn’t have intentionally added more errors to the code. Do not share false information.",
      highlights: [ 3 ],
      negateStop: 2
    }, {
      rule: "№7: Help Keep Flame Wars Under Control",
      description: "Keep the camaraderie in discussions online.",
      dos: [
        "If you are the one being flamed, respond to the one flaming you in a mature manner.",
        "Think through your emotions before responding to anything."
      ],
      donts: [
        "Express opinions without holding back your emotions.",
        "Destroy the camaraderie within the discussion group."
      ],
      scenario: "Scarlet was browsing through the Facebook comments section of a post containing a " +
                "picture of Jacob and Edward from Twilight. She saw a thread where people were arguing " +
                "about whether Jacob or Edward was the better male lead. A member of Team Jacob left a comment " +
                "saying that Team Jacob is way better than Team Edward because Edward only sparkles in the " +
                "sun and is not a true vampire. Scarlet, being a fan of Edward, got mad and bashed the " +
                "commentor by saying curse words and threats stating that their comment was invalid and that " +
                "the commenter was not a true fan of the movie. Scarlet checked her phone an hour later and saw " +
                "that she was receiving non stop messages from Team Jacob containing curse words and threats. ",
      elements: [
        {name: "Sender and receiver"},
        {name: "Posting or making a statement online"},
        {name: "Sender and receiver"},
        {name: "Online platform"}
      ],
      selements: [
        "Scarlet (sender & receiver), Team Jacob (sender), commenter (receiver)",
        "A member of Team Jacob left a comment saying that Team Jacob is way better than Team Edward",
        "Scarlet (sender & receiver), Team Jacob (sender), commenter (receiver)",
        "Facebook Comments Section"
      ],
      labors: [
            {
              old: "Scarlet was browsing through the Facebook comments section of a post containing a picture of Jacob and Edward from Twilight.",
              new: "-"
            }, {
              old: "She saw a thread where people were arguing whether Jacob or Edward was the better male lead.",
              new: "-"
            },{
              old: "A member of Team Jacob left a comment saying that Team Jacob is way better than Team Edward.",
              new: "-"
            }, {
              old: "Scarlet, being a fan of Edward, got mad and bashed the commentor by saying curse words and threats.",
              new: "Scarlet, being a fan of Edward, got mad but did not bash the commentor by saying curse words and threats."
            }, {
              old: "Scarlet checked her phone an hour later and saw that she was receiving non stop messages from Team Jacob.",
              new: "Scarlet checked her phone an hour later and saw that she did not receive non stop messages from Team Jacob."
            }
      ],
      solution: "Scarlet should not bash the commenter. Do not express your opinions without holding back your emotions.",
      highlights: [ 3 ],
      negateStop: 2
    }, {
      rule: "№8: Respect Other People’s Privacy",
      description: "Never ask for someone else's information when you are not comfortable giving out " +
                   "that kind of information yourself, and do not get someone's private information without permission",
      dos: [
        "Respect the person’s online privacy as you would respect the person’s privacy in real life."
      ],
      donts: [
        "Read other people’s personal messages or emails.",
        "Access information that is not meant to be public or not meant for them to be read."
      ],
      scenario: "Wayne hacked one of his friends’ account to practice his newly acquired skill " +
                "which is hacking. He successfully gained access to his friend’s account. While he " +
                "had access to his friend’s account, he read some of his friend’s personal messages " +
                "to other people. Wayne’s friend found out about what happened and got mad at Wayne for invading his privacy.",
      elements: [
        {name: "Owner and infiltrator"},
        {name: "When you access other people’s information"},
        {name: "Owner and Infiltrator"},
        {name: "Online platform"}
      ],
      selements: [
        "Wayne (infiltrator) and his friend (owner)",
        "Wayne hacked one of his friends’ account to practice his newly acquired skill which is hacking",
        "Wayne (infiltrator) and Wayne’s friend (owner)",
        "Facebook"
      ],
      labors: [
            {
              old: "Wayne hacked one of his friends’ account to practice his newly acquired skill.",
              new: "Wayne did not hack one of his friends’ account to practice his newly acquired skill."
            }, {
              old: "Wayne successfully gained access to his friend’s account.",
              new: "Wayne did not successfully gain access to his friend’s account."
            }, {
              old: "Wayne read his friend’s personal messages to other people.",
              new: "Wayne did not read his friend’s personal messages to other people."
            }, {
              old: "Wayne’s friend found out and got mad at Wayne for invading his privacy.",
              new: "Wayne’s friend did not  find out and did not get mad at Wayne for invading his privacy."
            }
      ],
      solution: "Wayne should not have tried his new hacking skills on his friend’s account without his " +
                "permission. Do not access information that is not meant to be public or not meant for them to be read",
      highlights: [ 0 ],
      negateStop: -1
    }, {
      rule: "№9: Don’t Abuse Your Power",
      description: "Do not use your skills or privileges as an admin or developer for personal gain or interest. ",
      dos: [
        "Respect your subordinate’s privacy.",
        "Know your boundaries."
      ],
      donts: [
        "Abuse your power to access your subordinate’s accounts.",
        "Read private emails of employees.",
        "Use your skills or privileges as an admin or a developer for personal gain or interest."
      ],
      scenario: "Justin works on the IT department of his company. He works as a system admin " +
                "in their company. Justin’s boss allowed Justin’s computer to access the company database " +
                "for data analysis and told him to use it for work purposes only. Since Justin’s computer " +
                "has access to the company database, he took this opportunity to get information about Karen, " +
                "a workmate he has a crush on,  in order to plan a move to impress her. His actions were found " +
                "out and he lost his job. ",
      elements: [
        {name: "Subordinate and admin"},
        {name: "When there is a need to access admin features"},
        {name: "Subordinate and admin"},
        {name: "Company network, company online platform"}
      ],
      selements: [
        "Justin (subordinate) and Justin’s Boss (admin)",
        "When the boss allowed Justin’s computer to access the company database",
        "Justin (subordinate), Justin’s Boss (admin), Karen, the company (receivers)",
        "Company database, Justin’s computer"
      ],
      labors: [
            {
              old: "Justin’s boss allowed Justin’s computer access to the company database for work purposes only.",
              new: "-"
            }, {
              old: "Justin used this type of access to get information about Karen.",
              new: "Justin did not use this type of access to get information about Karen."
            }, {
              old: "The admin found out about him getting the information about Karen.",
              new: "The admin did not find out about him getting the information about Karen."
            }, {
              old: "Justin got fired.",
              new: "Justin did not get fired."
            }
      ],
      solution: "Justin should not have used this type of access to get information about Karen. " +
                "Do not abuse your power to access your subordinate’s accounts.",
      highlights: [ 1 ],
      negateStop: 0
    }, {
      rule: "№10: Be Forgiving Of Other People’s Mistakes",
      description: "Do not hold people’s mistakes that they’ve made online against them.",
      dos: [
        "Do not hold people’s mistakes that they’ve made online against them.",
        "If you inform someone of their mistake, inform them politely and privately.",
        "Think twice before reacting."
      ],
      donts: [
        "Respond without thinking critically about your reaction first.",
        "Humiliate someone publicly instead of correcting them or humiliate them while correcting them.",
        "Being untoward to them when correcting them."
      ],
      scenario: "Sophiya is a history major student. One of her friends, Cassie, shared a post on " +
                "Facebook about Julius Ceasar trivia. Sophiya found factual errors and some grammatical " +
                "errors. She bluntly commented on Cassie’s post that it has a lot of errors and rudely " +
                "demanded that Cassie post the actual facts. A lot of people including Cassie’s friends " +
                "saw the post along with the comments. Cassie got embarrassed and immediately deleted her " +
                "post after reading Sophiya’s comments. Sophiya only realized later on that it would embarrass " +
                "Cassie and later on felt bad about what she did.",
      elements: [
        {name: "Sender and/or receiver"},
        {name: "Posting or making a statement online"},
        {name: "Sender and receiver"},
        {name: "Online platform"}
      ],
      selements: [
        "Sophiya (sender) and Cassie (receiver)",
        "Cassie shared a post on Facebook",
        "Sophiya (sender), Cassie, and people in Facebook (receivers)",
        "Facebook"
      ],
      labors: [
            {
              old: "Cassie shared a post on Facebook about some Julius Caesar trivia.",
              new: "-"
            }, {
              old: "Sophiya bluntly commented that her post had a lot of errors and rudely demanded that Cassie post the actual facts.",
              new: "Sophiya did not bluntly comment that her post had a lot of errors and did not rudely demand that Cassie post the actual facts."
            }, {
              old: "A lot of people including Cassie’s friends saw the comments on her post.",
              new: "A lot of people including Cassie’s friends did not see the comments on her post."
            },{
              old: "Cassie got embarrassed and deleted the post immediately afterwards.",
              new: "Cassie did not get embarrassed and did not delete the post immediately afterwards."
            }, {
              old: "Sophiya only realized the consequences of her actions later on and now feels bad about what she did.",
              new: "Sophiya did not only realize the consequences of her actions later on."
            }
      ],
      solution: "Sophiya should not have bluntly commented that her post had a lot of errors and should not have rudely " +
                "demanded that Casse post the actual facts. Do not react without thinking critically about your reaction " +
                "first. Do not humiliate someone publicly instead of correcting them or humiliate them while correcting " +
                "them. Do not be untoward to them when correcting them",
      highlights: [ 1 ],
      negateStop: 0
    }
  ]
  };
});
