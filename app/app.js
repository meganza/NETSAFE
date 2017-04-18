var Netsafe = angular.module('Netsafe', ['ui.router'])

Netsafe.config(function($stateProvider) {

	$stateProvider
	// enter netsafe route
	.state('index', {
		url: '',
		controller: 'indexController',
		templateUrl: 'app/views/index.html'
	})
	// layout/base controller for whole app
	// the view of this contains the nav, footer, etc
	// whatever is similar on each page
	.state('netsafe', {
		url: '/netsafe',
		controller: 'netsafeController',
		templateUrl: 'app/views/netsafe.html'
	})
	.state('netsafe.main', {
		url: '/main',
		controller: 'mainController',
		templateUrl: 'app/views/main.html'
	})
	.state('netsafe.cybercitizenship', {
		url: '/cybercitizenship',
		controller: 'cybercitizenshipController',
		templateUrl: 'app/views/cybercitizenship.html'
	})
	.state('netsafe.netiquette', {
		url: '/netiquette',
		//controller: 'netiquetteController',
		templateUrl: 'app/views/netiquette.html'
	})
	.state('netsafe.safety', {
		url: '/satefy',
		//controller: 'safetyController',
		templateUrl: 'app/views/safety.html'
	})
	.state('netsafe.definition', {
		url: '/definition',
		controller: 'definitionController',
		templateUrl: 'app/views/definition.html'
	})
	.state('netsafe.fundamental', {
		url: '/fundamental',
		controller: 'fundamentalController',
		templateUrl: 'app/views/fundamental.html'
	})
	.state('netsafe.rules', {
		url: '/core-rules',
		controller: 'rulesController',
		templateUrl: 'app/views/rules.html'
	})
	.state('netsafe.netivity', {
		url: '/netiquette-activity',
		controller: 'netivityController',
		templateUrl: 'app/views/netivity.html'
	})
	.state('netsafe.malware', {
		url: '/malware',
		controller: 'malwareController',
		templateUrl: 'app/views/malware.html'
	})
	.state('netsafe.identity', {
		url: '/identity-theft',
		//controller:
		templateUrl: 'app/views/identity.html'
	})
	.state('netsafe.spam', {
		url: '/spam',
		//controller:
		templateUrl: 'app/views/spam.html'
	})
	.state('netsafe.phishing', {
		url: '/phishing',
		//controller:
		templateUrl: 'app/views/phishing.html'
	})
	.state('netsafe.pharming', {
		url: '/pharming',
		//controller:
		templateUrl: 'app/views/pharming.html'
	})
	.state('netsafe.rogue', {
		url: '/rogue-security-software',
		//controller:
		templateUrl: 'app/views/rogue.html'
	})
	.state('netsafe.activity', {
		url: '/safety-security-activity',
		//controller:
		templateUrl: 'app/views/activity.html'
	})
});
