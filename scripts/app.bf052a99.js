'use strict';

/**
 * @ngdoc overview
 * @name clubApp
 * @description
 * # clubApp
 *
 * Main module of the application.
 */
angular
  .module('clubApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngLodash',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'duScroll',
    'ngUrlParser',
    'monospaced.elastic',
    'ngFileUpload',
    'angular-inview'
  ])
  .run(function($rootScope, $state, $resource, lodash, urlParser, stateS, storageS, scrollS, TokenSignInR, SiteR) {

    if(lodash) $rootScope._ = lodash;
    if($state) $rootScope.state = $state;
    if(stateS) $rootScope.stateS = stateS;
    if(scrollS) $rootScope.scrollS = scrollS;
    if(urlParser) $rootScope.urlParser = urlParser;

    SiteR.get({host : $rootScope.urlParser.getHostname()}, function(SiteResponse){
      if(SiteResponse.results.length==1){
        $rootScope.site = angular.copy(SiteResponse.results[0]);
      }
    }, function(){
      alert('새로고침 해주세요');
    });

    $rootScope.responseMessage = function(response, success_alert) {
      if (success_alert && response.success) {
        alert(response.success);
      }
      if (response.fail) {
        alert(response.fail);
      }
      if (response.status == -1) {
        alert('인터넷 연결이 좋지 않습니다');
      }
    };
  });
