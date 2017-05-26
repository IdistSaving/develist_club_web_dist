'use strict';

angular.module("clubApp")
	.directive("explainDetailRoomRoomsLandingDir", function () {
		return {
			link: function (scope, element, attrs) {


        // Initialize Function Section
        scope.initialize = function(){
        };
        scope.initialize();
			},
			replace: true,
			scope:{
				index:"=",
				data:"="
			},
			restrict:"EA",
			templateUrl: 'views/landing/rooms/explainDetailRoomRoomsLandingDir.html'
		};
	});
