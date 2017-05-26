'use strict';

angular.module("clubApp")
	.directive("detailContactLandingDir", function () {
		return {
			link: function (scope, element, attrs) {


        // Initialize Function Section
        scope.initialize = function(){
        };
        scope.initialize();
			},
			replace: true,
			scope:{
				data:"=data",
				field:"=field",
				index:"=index"
			},
			restrict:"EA",
			templateUrl: 'views/landing/contact/detailContactLandingDir.html'
		};
	});
