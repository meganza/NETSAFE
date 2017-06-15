var Netsafe = angular.module('Netsafe', ['ui.router', 'youtube-embed']);

Netsafe.config(function($stateProvider) {

  $stateProvider
  // enter netsafe route
  .state('index', {
    url: '',
    controller: 'indexController',
    templateUrl: 'views/index.html'
  })
  // layout/base controller for whole app
  // the view of this contains the nav, footer, etc
  // whatever is similar on each page
  .state('netsafe', {
    url: '/netsafe',
    controller: 'netsafeController',
    templateUrl: 'views/netsafe.html'
  })
  .state('netsafe.main', {
    url: '/main',
    controller: 'mainController',
    templateUrl: 'views/main.html'
  })
  .state('netsafe.cybercitizenship', {
    url: '/cybercitizenship',
    controller: 'cybercitizenshipController',
    templateUrl: 'views/cybercitizenship.html'
  })
  .state('netsafe.netiquette', {
    url: '/netiquette',
    //controller: 'netiquetteController',
    templateUrl: 'views/netiquette.html'
  })
  .state('netsafe.safety', {
    url: '/satefy',
    //controller: 'safetyController',
    templateUrl: 'views/safety.html'
  })
  .state('netsafe.definition', {
    url: '/definition',
    controller: 'definitionController',
    templateUrl: 'views/definition.html'
  })
  .state('netsafe.fundamental', {
    url: '/fundamental',
    controller: 'fundamentalController',
    templateUrl: 'views/fundamental.html'
  })
  .state('netsafe.rules', {
    url: '/core-rules',
    controller: 'rulesController',
    templateUrl: 'views/rules.html'
  })
  .state('netsafe.netivity', {
    url: '/netiquette-activity',
    controller: 'netivityController',
    templateUrl: 'views/netivity.html'
  })
  .state('netsafe.malware', {
    url: '/malware',
    controller: 'malwareController',
    templateUrl: 'views/malware.html'
  })
  .state('netsafe.identity', {
    url: '/identity-theft',
    //controller:
    templateUrl: 'views/identity.html'
  })
  .state('netsafe.spam', {
    url: '/spam',
    //controller:
    templateUrl: 'views/spam.html'
  })
  .state('netsafe.phishing', {
    url: '/phishing',
    //controller:
    templateUrl: 'views/phishing.html'
  })
  .state('netsafe.pharming', {
    url: '/pharming',
    //controller:
    templateUrl: 'views/pharming.html'
  })
  .state('netsafe.rogue', {
    url: '/rogue-security-software',
    //controller:
    templateUrl: 'views/rogue.html'
  })
  .state('netsafe.activity', {
    url: '/safety-security-activity',
    controller: 'activityController',
    templateUrl: 'views/activity.html'
  });
});
