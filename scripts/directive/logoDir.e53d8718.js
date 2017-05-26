'use strict';

angular.module("clubApp")
	.directive("logoDir", function ($rootScope, Upload) {
		return {
			link: function (scope, element, attrs) {

				// ChangeImage Function Section
				scope.changeLogoImage = function(image){
					if(!image) return;
					Upload.base64DataUrl(image).then(function(image_64){
						scope.cover_logo = image_64;
						$rootScope.$broadcast('update_logo_image', scope.cover_logo);
					});
				};

				// Initialize function section
				scope.initialize = function(){
				};
				scope.initialize();

				// Watch Section
		    var watch = $rootScope.$on('cover-logo-image',function(event,args){
		      scope.cover_logo = args;
		    });
		    $rootScope.$on('$destroy',function($event){ watch(); });
			},

			replace: true,
			scope:{},
			restrict:"EA",
			templateUrl:'views/directive/logoDir.html'
		};
	});
