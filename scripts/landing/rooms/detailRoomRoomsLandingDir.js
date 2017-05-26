'use strict';

angular.module("clubApp")
	.directive("detailRoomRoomsLandingDir", function () {
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
			templateUrl: 'views/landing/rooms/detailRoomRoomsLandingDir.html'
		};
	});
