'use strict';

angular.module("clubApp")
	.directive("mapContactLandingDir", function ($rootScope, $q) {
		return {
			link: function (scope, element, attrs) {

				// Map Section
				var getAddress = function(){
					return $q(function(resolve, reject){
						naver.maps.Service.geocode({
							address: scope.data_get.location
						}, function(status, response) {
							if (status === naver.maps.Service.Status.ERROR) {
								return alert('주소를 다시 확인해주세요');
							}
							var item = response.result.items[0];
	            var addrType = item.isRoadAddress ? '[도로명 주소]' : '[지번 주소]';
							resolve({Lat:item.point.y, Lng:item.point.x});
						});
					})

				};

        // Initialize Function Section
        scope.initialize = function(){
					getAddress().then(function(currentLatLng){
						var position = new naver.maps.LatLng(currentLatLng.Lat, currentLatLng.Lng);
						var mapDiv = document.getElementById('map');
						var map = new naver.maps.Map(mapDiv, {
							center: position,
							zoom: 14
						});
						var HOME_PATH = window.HOME_PATH || '.';
						var markerOptions = {
					    position: new naver.maps.LatLng(currentLatLng.Lat, currentLatLng.Lng),
					    map: map
							,
					    icon: {
					        url: 'https://navermaps.github.io/maps.js/docs/img/example/sally.png',
					        size: new naver.maps.Size(50, 52),
					        origin: new naver.maps.Point(0, 0),
					        anchor: new naver.maps.Point(25, 26)
					    }
						};

						var marker = new naver.maps.Marker(markerOptions);

					});

        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl: 'views/landing/contact/mapContactLandingDir.html'
		};
	});
