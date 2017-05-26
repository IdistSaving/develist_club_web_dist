'use strict';

angular.module('clubApp')
	.config(function($resourceProvider, $stateProvider, $urlRouterProvider) {
		$resourceProvider.defaults.stripTrailingSlashes = false;
		$stateProvider

			// LANDING
			.state('landing', { url: '/', templateUrl: 'views/landing/landing.html', controller: 'LandingCtrl' })
			.state('landing/admin', { url: '/admin', templateUrl: 'views/landing/Landing.html', controller: 'LandingCtrl', signin:true })

			// SIGN
			// .state('signIn', { url: '/signIn', templateUrl: 'views/sign/signIn.html', controller: 'SignInCtrl' })

		$urlRouterProvider.otherwise('/');

	});
