'use strict';

angular.module("clubApp")
	.directive("headerDir", function ($rootScope) {
		return {
			link: function (scope, element, attrs) {
				// Function Section
				scope.clickHeader = function(){
					scope.header_filter = !scope.header_filter;
					$rootScope.$broadcast('header-filter', scope.header_filter);
				};

				// Initialize Function Section
				scope.initialize = function(){
					scope.header_filter = false;
				};
				scope.initialize();


				// Watch Section
				angular.element(window).bind("scroll", function() {
					$rootScope.scrollTop = element.offset().top;
					scope.$apply();
        });

				var watch2 = $rootScope.$on('data-get-tel',function(event, arg1, arg2, arg3){
					scope.tel = arg1;
					scope.kakao = arg2;
					scope.location = arg3;
					scope.headerContents = [
						{name:'연락처', text: scope.tel}, {name:'카카오톡', text: scope.kakao}, {name:'위치', text: scope.location}
					];
				});

				var watch3 = $rootScope.$on('cover-landing-height',function(event, args){
					scope.cover_height = args;
				})
				$rootScope.$on('$destroy',function($event){ watch1(); watch2(); watch3(); });

				scope.initialize = function(){
					$rootScope.scrollTop = 0;
					scope.cover_height = 0;
				};
				scope.initialize();
			},


			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl:'views/directive/headerDir.html'
		};
	});
