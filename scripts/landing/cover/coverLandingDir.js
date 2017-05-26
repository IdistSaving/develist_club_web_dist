'use strict';

angular.module("clubApp")
	.directive("coverLandingDir", function ($rootScope, Upload) {
		return {
			link: function (scope, element, attrs) {
				//  Set section
				$rootScope.$broadcast('cover-landing-height', element[0].offsetHeight);

				// ChangeImage Function Section
				scope.changeCoverImage = function(image){
					if(!image) return;
					Upload.base64DataUrl(image).then(function(image_64){
						scope.data_get.cover_image = image_64;
					});
				};

			$rootScope.coverHeight = element[0].offsetHeight;

        // Initialize Function Section
        scope.initialize = function(){
        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/cover/coverLandingDir.html'
		};
	});
