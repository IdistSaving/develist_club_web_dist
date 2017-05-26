'use strict';

angular.module("clubApp")
	.directive("detailsReservationLandingDir", function ($rootScope, $filter) {
		return {
			link: function (scope, element, attrs) {
				// Function Section


			  // Initialize Function Section
        scope.initialize = function(){

					scope.reservationDetails = [
						{name:"NAME", placeholder:"이름을 입력해주세요", color:"", choice:"TABLE", type:''},
						{name:"DATE", placeholder:"2017.05.20", color:"", choice:"TABLE", type:''},
						{name:"ROOM", placeholder:"룸을 선택 해주세요", color:"", choice:"TABLE", type:''},
						{name:"NUMBER", placeholder:"인원 수를 입력해 주세요", color:"", choice:"TABLE", type:'number'},
						{name:"PHONE", placeholder:"연락처를 입력해 주세요", color:"", choice:"TABLE", type:''},
						{name:"NAME", placeholder:"이름을 입력해주세요", color:"", choice:"GUEST", type:''},
						{name:"DATE", placeholder:"2017.05.20", color:"", choice:"GUEST", type:''},
						{name:"NUMBER", placeholder:"인원 수를 입력해 주세요", color:"", choice:"GUEST", type:''},
						{name:"PHONE", placeholder:"연락처를 입력해 주세요", color:"", choice:"GUEST", type:''},
					];
					scope.filteredDetails = $filter('filter')(scope.reservationDetails, {choice:"GUEST"});
        };
        scope.initialize();


				// Watch Section
				var watch = $rootScope.$on('clicked-filter-tab',function(event, args){
					scope.filteredDetails = $filter('filter')(scope.reservationDetails, {choice:args.title});
				});
				$rootScope.$on('$destroy',function($event){ watch(); });
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/reservation/detailsReservationLandingDir.html'
		};
	});
