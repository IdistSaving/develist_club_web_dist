'use strict';

angular.module("clubApp")
	.directive("sectionTitleDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {
				// Initialize function section
				scope.initialize = function(){
				};
				scope.initialize();

			},

			replace:true,
			scope:{
				section:"="
			},
			restrict:"EA",
			templateUrl:'views/directive/sectionTitleDir.html'
		};
	});
