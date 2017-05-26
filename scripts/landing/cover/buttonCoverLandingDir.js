'use strict';

angular.module("clubApp")
	.directive("buttonCoverLandingDir", function () {
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
			templateUrl: 'views/landing/cover/buttonCoverLandingDir.html'
		};
	});
