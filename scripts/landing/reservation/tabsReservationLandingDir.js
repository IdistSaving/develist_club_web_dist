'use strict';

angular.module("clubApp")
	.directive("tabsReservationLandingDir", function ($rootScope, $filter) {
		return {
			link: function (scope, element, attrs) {

				// Function Section
				scope.tabFilter = function(clicked_tab){
					if(!clicked_tab.active){
						$filter('filter')(scope.reservationTabs, {active:true})[0].active=false;
						clicked_tab.active=true;
					}
					$rootScope.$broadcast('clicked-filter-tab', clicked_tab);
				};

        // Initialize Function Section
        scope.initialize = function(){
					scope.reservationTabs = [
						{image:"/images/reservationImage/Guest_icon_image.png", image_active:"/images/reservationImage/Guest_icon_image_active.png", title:"GUEST", active:true},
						{image:"/images/reservationImage/Table_icon_image.png", image_active:"/images/reservationImage/Table_icon_image_active.png", title:"TABLE", active:false}
					];
        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/reservation/tabsReservationLandingDir.html'
		};
	});
