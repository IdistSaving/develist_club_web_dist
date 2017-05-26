'use strict';

angular.module("clubApp")
	.directive("reservationLandingDir", function (Upload) {
		return {
			link: function (scope, element, attrs) {
				// Change Function Section
				scope.changeReservationCoverImage = function(image){
					if(!image) return;
					Upload.base64DataUrl(image).then(function(image_64){
						scope.data_get.reservation_cover_image = angular.copy(image_64);
					});
				};

				// Function Section
				scope.goToReservation = function(){
					alert('문자가 전송되었습니다.');
				};

        // Initialize Function Section
        scope.initialize = function(){

        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/reservation/reservationLandingDir.html'
		};
	});
