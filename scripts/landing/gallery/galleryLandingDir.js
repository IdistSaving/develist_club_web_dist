'use strict';

angular.module("clubApp")
	.directive("galleryLandingDir", function ($rootScope, Upload) {
		return {
			link: function (scope, element, attrs) {

				// ChangeImage Function Section
				scope.changeGalleryCoverImage = function(image, data, index){
					if(!image) return;
					Upload.base64DataUrl(image, data).then(function(image_64){
						scope.data_get.gallery_cover_image = angular.copy(image_64);
						console.info(scope.data_get);
					});
				};

        // Initialize Function Section
        scope.initialize = function(){
        };
				scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl:'views/landing/gallery/galleryLandingDir.html'
		};
	});
