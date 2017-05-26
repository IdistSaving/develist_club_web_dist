'use strict';

angular.module("clubApp")
	.directive("detailsContactLandingDir", function () {
		return {
			link: function (scope, element, attrs) {

        // Initialize Function Section
        scope.initialize = function(){
					scope.fields = ['location', 'tel', 'kakao'];
        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/contact/detailsContactLandingDir.html'
		};
	});
