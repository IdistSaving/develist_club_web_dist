'use strict';

angular.module("clubApp")
	.directive("detailsRoomRoomsLandingDir", function () {
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
			templateUrl: 'views/landing/rooms/detailsRoomRoomsLandingDir.html'
		};
	});
