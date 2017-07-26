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
        "Don’t forget that the recipient of your words is a human too.",
        "Say something that could be considered mean or rude without thinking about it first. ",
        "Say anything that could be saved and used against you."
      ],
      scenario: "Thomas is a budding digital artist. He is proud of his works so he posts his digital " +
                "artworks of rainforests on his Facebook page. He received an email from some fellow " +
                "he has never met. This fellow tells Thomas that his works are trash and should quit " +
                "creating digital art. Thomas got hurt and his self confidence in his artistic skills diminished. ",
      elements: [
        {name: "Sender and/or Receiver"},
        {name: "When the sender makes a statement or posted something on the online platform"},
        {name: "Sender and/or Receiver"},
        {name: "Online platform"}
      ],
      selements: [
        "Thomas and anonymous fellow",
        "Thomas posting his digital work",
        "Thomas",
        "E-mail and Facebook"
      ],
      labors: [
            {
              old: "First Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Second Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Third Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }
      ],
      solution: "Hello this is the solution for the first blahoo"
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
        "Do illegal actions"
      ],
      scenario: "The class is to submit their assignment online through Yahoo groups. Benedict saw that " +
                "his classmate has already submitted and he downloaded his classmate’s file. He copy-pasted " +
                "some of the content that his classmate wrote. When the results came back, they were both accused " +
                "of cheating or plagiarism and were both given zeros for the assignment. ",
      elements: [
        {name: "Netizen/s"},
        {name: "When the netizen posts online"},
        {name: "Netizen"},
        {name: "Online platform"}
      ],
      selements: [
        {content: "Benedict"},
        {content: "Submitting the assignment online"},
        {content: "Benedict and his classmate"},
        {content: "Yahoo Groups"}
      ],
      labors: [
            {
              old: "First Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Second Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Third Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }
      ],
      solution: "Hello this is the solution for the second blahoo"
    }, {
      rule: "№3: Know Where You Are In Cyberspace",
      description: "Follow the rules of the domain and act accordingly to those rules while in that domain.",
      dos: [
        "Be mindful of where you are on the internet.",
        "Adapt to your surroundings. ",
        "Adhere to the behavior acceptable on the domain you are in.",
        "If you are new in that domain, observe the behavior of the netizens there."
      ],
      donts: [
        "Post rumors on news forums.",
        "Act untowardly to the netizens of that domain due to lack of observation beforehand."
      ],
      scenario: "Martin is currently a highschool student. He uses millennial words and phrases " +
                "when texting or chatting with his friends. He sends an email to his teacher " +
                "asking about their class project using the school email account issued to them. " +
                "In his email, he used the words and phrases, “TBH”, “on fleek”, “lit”, and “jk.” " +
                "His teacher replied to his email telling him that he cannot understand some of " +
                "his terms and to be more professional and use proper words when writing emails.",
      elements: [
        {name: "Netizen/s"},
        {name: "When you start participating in a new community online"},
        {name: "New netizen and/or netizens native to the domain"},
        {name: "Online platform"}
      ],
      selements: [
        {content: "Martin and his teacher"},
        {content: "Martin sent an email to his teacher using millennial slang"},
        {content: "Martin and his teacher"},
        {content: "School email account"}
      ],
      labors: [
            {
              old: "First Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Second Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Third Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }
      ],
      solution: "Hello this is the solution for the third blahoo"
    }, {
      rule: "№4: Respect Other People’s Time And Bandwidth ",
      description: "Be considerate of other people’s time on the internet. Send only important things and to only those who need it.",
      dos: [
        "Be considerate of other people’s time on the internet. Send only important things and to only those who need it.",
        "Remember that no one is the center of cyberspace.",
        "Remember that not everyone will agree to what a person has to say no matter how much effort the person has put in making that post or comment.",
        "Send whatever you need to send to only those who actually need it."
      ],
      donts: [
        "Post similar content multiple times.",
        "Waste people’s time and bandwidth.",
        "Expect that others will instantaneously respond to your questions and concerns."
      ],
      scenario: "Trixie posted her problem with her code on an online discussion group, " +
                "she did it several times thinking that she could get answers right away " +
                "in doing so. The other people in the discussion group got irritated by " +
                "Trixie’s same multiple posts because those covered up most of the page " +
                "of the group.",
      elements: [
        {name: "Sender and/or receiver"},
        {name: "When you are sending information on the online platform"},
        {name: "New netizen, netizens native to the domain"},
        {name: "Online platform"}
      ],
      selements: [
        {content: "Martin and his teacher"},
        {content: "Martin sent an email to his teacher using millennial slang"},
        {content: "Martin and his teacher"},
        {content: "School email account"}
      ],
      labors: [
            {
              old: "First Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Second Anonymous person asks Sarah to send him a photo of her and her family",
              new: "new Anonymous person asks Sarah to send him a photo of her and her family"
            }, {
              old: "Third Anonymous person asks Sarah to send him a photo of her and her family",
              new: "dsfsdfdnew Anonymous person asks Sarah to send him a photo of her and her family"
            }
      ],
      solution: "Hello this is the solution for the fourth blahoo"
    },
  ]
  };
});
