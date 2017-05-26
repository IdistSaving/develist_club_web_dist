'use strict';

angular.module("clubApp")
	.directive("headerFilterDir", function ($rootScope, $q) {
		return {
			link: function (scope, element, attrs) {
				// Function Section
				scope.clickToScrollSub = function(index){
					return $q(function(resolve, reject){
						scope.clickHeader();
						resolve(index);
					}, function(){
						reject();
					});
				};

				scope.clickToScroll = function(index){
					scope.clickToScrollSub(index).then(function(index){
						$rootScope.scrollS.goElement('#section'+index);
					});
				};



				// Initialize function section
				scope.initialize = function(){
					scope.headerScrollItems = [
						{text:'GALLERY'}, {text:'ROOM'}, {text:'RESERVATION'}, {text:'CONTACT'}
					];
				};
				scope.headerFilters = [
					{title:'연락처', text:scope.tel}, {title:'카카오톡', text:scope.kakao}, {title:'위치', text:scope.location}
				];
				scope.initialize();

			},
			replace: true,
			scope:{
				headerContents:"=headerContents",
				clickHeader:"=clickHeader"
			},
			restrict:"EA",
			templateUrl:'views/directive/headerFilterDir.html'
		};
	});
