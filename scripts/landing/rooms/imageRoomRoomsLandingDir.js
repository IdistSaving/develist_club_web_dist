'use strict';

angular.module("clubApp")
	.directive("imageRoomRoomsLandingDir", function (Upload) {
		return {
			link: function (scope, element, attrs) {

				// ChangeImage Function Section
				scope.changeRoomImage = function(image, data, index){
					if(!image) return;
					Upload.base64DataUrl(image, data).then(function(image_64){
						scope.data['room_image'+(index+1)] = angular.copy(image_64);
					});
				};

        // Initialize Function Section
        scope.initialize = function(){
        };
        scope.initialize();
			},
			replace: true,
			scope:{
				data:"=",
				index:"="
			},
			restrict:"EA",
			templateUrl: 'views/landing/rooms/imageRoomRoomsLandingDir.html'
		};
	});
