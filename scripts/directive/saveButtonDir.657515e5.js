'use strict';

angular.module("clubApp")
	.directive("saveButtonDir", function ($rootScope, $q, SiteR) {
		return {
			link: function (scope, element, attrs) {

				// Function Section
				scope.saveButton = function(){
					$rootScope.$broadcast('save-button', true);
				};

        // Initialize Function Section
        scope.initialize = function(){
        };
        scope.initialize();
			},
			replace: true,
			scope:false,
			restrict:"EA",
			templateUrl:'views/directive/saveButtonDir.html'
		};
	});


//
// 	scope.obj_old = { // 서버에서 받아온 값
//   id : 1,
//   text1 : 'TEXT',
//   text2 : 'TEXT',
//   image1 : 'IMAGE',
//   image2 : 'IMAGE'
// };
//
// scope.obj = angular.copy(scope.obj_old); // 서버에서 받아온 값을 복사해서 작업용도로 사용
//
// var scope.obj_new = { id:scope.obj_old.id }; // 업데이트할 값들만 넣는 객체
//
// for( var prop in scope.obj_old){ // 모든 key를 돌면서 value가 다른지 체크
//   if(!(scope.obj[prop]==scope.obj_old[prop])){
//     scope.obj_new[prop] = scope.obj[prop]
//   }
// }
//
// scope.obj_new = {
//   id : 1,
//   text2 : 'TEXT',
//   image1 : 'IMAGE'
// }
//
// SiteR.update(scope.obj_new, function(){});
