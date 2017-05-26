'use strict';

angular.module("clubApp")
	.directive("nameDetailRoomRoomsLandingDir", function () {
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
			templateUrl: 'views/landing/rooms/nameDetailRoomRoomsLandingDir.html'
		};
	});
