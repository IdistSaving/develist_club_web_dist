'use strict';

angular.module("clubApp")
	.directive("footerDir", function ($rootScope, $window) {
		return {
			link: function (scope, element, attrs) {
				// Initialize function section
				scope.initialize = function(){
				};
				scope.initialize();

        // Watch Section
				var watch = $rootScope.$on('data-get-tel',function(event, args){
					console.log(args);
					scope.tel_number = args;
				});
				$rootScope.$on('$destroy',function($event){ watch(); });

        var win = angular.element($window);
        scope.$watch(function() {
          return element[0].offsetHeight;
        }, function(newValue, oldValue) {
          if (!$rootScope.heights)
          $rootScope.heights = {};
          $rootScope.heights.footer = element[0].offsetHeight;
          // if ($rootScope.state.current.group == 'landing') {
          //   $rootScope.heights.header = 0;
          // } else {
            $rootScope.heights.footer = element[0].offsetHeight;
          // }
        });
        win.bind('resize', function() {
          scope.$apply();
        });
			},

			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl:'views/directive/footerDir.html'
		};
	});
