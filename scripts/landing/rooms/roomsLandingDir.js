'use strict';

angular.module("clubApp")
	.directive("roomsLandingDir", function (Upload) {
		return {
			link: function (scope, element, attrs) {
				scope.changeRoomsImage = function(image){
					Upload.base64DataUrl(image).then(function(image_64){
						scope.data_get.room_cover_image = angular.copy(image_64);
					});
				}


        // Initialize Function Section
        scope.initialize = function(){
        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/rooms/roomsLandingDir.html'
		};
	});
