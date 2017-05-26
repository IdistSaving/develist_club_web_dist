'use strict';

angular.module('clubApp')
  .controller('LandingCtrl', function ($rootScope, $scope, $q, SiteR) {

    // Load Function Section
    $scope.loadClubSiteFromServer = function(){
  		return $q(function(resolve, reject) {
  			SiteR.get({
          host: $rootScope.urlParser.getHostname()
        }, function(ClubSiteResponse_success) {
          $scope.data_get = angular.copy(ClubSiteResponse_success.results[0]);
          $rootScope.$broadcast('cover-logo-image', $scope.data_get.cover_logo);
          $rootScope.$broadcast('data-get-tel', $scope.data_get.tel, $scope.data_get.kakao, $scope.data_get.location);
          console.log($scope.data_get);
  				resolve(ClubSiteResponse_success);
  			}, function(ClubSiteResponse_error) {
          console.log(ClubSiteResponse_error, 'fail')
  				reject(ClubSiteResponse_error);
  			});
  		});
  	};

    // Save Function Section
    $scope.save = function(){
      if($scope.data_get.id){ $scope.saveClubSiteToServer(); return; }
      $scope.updateClubSiteToServer();
    };

    $scope.updateClubSiteToServer = function(){
      return $q(function(resolve, reject){
        $scope.data_update.id = $scope.data_get.id;
         // 업데이트할 값들만 넣는 객체
        for( var prop in $scope.data_get){
          // 모든 key를 돌면서 value가 다른지 체크
          if(!($scope.data_get[prop]==$scope.data_get_copy[prop])){
            $scope.data_update[prop] = $scope.data_get[prop]
          }
        }
        SiteR.update($scope.data_update,
          function(ClubSiteResponse_success){
            console.log($scope.data_update)
            alert('성공적으로 저장되었습니다.');
          console.log(ClubSiteResponse_success, 'success')
        },function(ClubSiteResponse_error){
          console.log(ClubSiteResponse_error, 'fail')
        });
      });
    };

    $scope.saveClubSiteToServer = function(){
      if($scope.data_get.id){
        $scope.updateClubSiteToServer();
      }else
      return $q(function(resolve, reject){
        SiteR.save($scope.data_update,
          function(ClubSiteResponse_success){
            alert('성공적으로 저장되었습니다.');
          console.log(ClubSiteResponse_success, 'success')
        },function(ClubSiteResponse_error){
          console.log(ClubSiteResponse_error, 'fail')
        });
      });
    };




    // Initialize Function Section
    $scope.initialize = function(){
      $scope.data_update = {};
      if($scope.urlParser.getHostname()){
        $scope.loadClubSiteFromServer().then(function(){
          // update data, get data 생성
          $scope.data_get_copy = angular.copy($scope.data_get);
        });
      }
    };
    $scope.initialize();


    // Watch Section
    var watch = $rootScope.$on('header-filter',function(event,args){
      $scope.filter_active = args;
    });

    var watch1 = $rootScope.$on('update_logo_image',function(event,args){
      $scope.data_get.cover_logo = args;
      $rootScope.$broadcast('cover-logo-image', $scope.data_get.cover_logo);
    });

    var watch2 = $rootScope.$on('save-button',function(event,args){
      if(args){
        $scope.save();
      }
    });
    $rootScope.$on('$destroy',function($event){ watch(); watch2(); watch3();});
  });
