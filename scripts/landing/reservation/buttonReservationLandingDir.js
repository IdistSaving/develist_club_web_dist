'use strict';

angular.module("clubApp")
	.directive("buttonReservationLandingDir", function ($filter, ClubSendMailR) {
		return {
			link: function (scope, element, attrs) {

			// Function Section
			scope.goToReservation = function(){
				if(scope.button_booked) return;
				if(scope.filteredDetails.length==2){
					ClubSendMailR.save({
						user_name : scope.reservationGuest[0].input,
						date : scope.reservationGuest[1].input,
						guest : 'guest',
						number : '',
						email : '',
						room : ''
					}, function(SendMailR_success){
						scope.button_booked = true;
						alert('성공');
					}, function(SendMailR_error){
						alert('실패');
					});
				}else if(scope.filteredDetails.length!=2){
						ClubSendMailR.save({
							user_name : scope.reservationTable[0].input,
							date : scope.reservationTable[1].input,
							number : scope.reservationTable[2].input,
							room : scope.reservationTable[3].input
						}, function(SendMailR_success){
							alert('성공');
						}, function(SendMailR_error){
							alert('실패');
						});
					}
				};


        // Initialize Function Section
        scope.initialize = function(){
					scope.reservationGuest = $filter('filter')(scope.reservationDetails, {choice:"GUEST"});
					scope.reservationTable = $filter('filter')(scope.reservationDetails, {choice:"TABLE"});
					scope.button_booked =false;


        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/reservation/buttonReservationLandingDir.html'
		};
	});
