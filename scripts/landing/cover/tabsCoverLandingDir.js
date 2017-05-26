'use strict';

angular.module("clubApp")
	.directive("tabsCoverLandingDir", function () {
		return {
			link: function (scope, element, attrs) {

        // Initialize Function Section
        scope.initialize = function(){
        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/cover/tabsCoverLandingDir.html'
		};
	});
