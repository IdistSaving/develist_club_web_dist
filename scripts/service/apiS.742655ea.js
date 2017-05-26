'use strict';

// { 'get':    {method:'GET'},
//   'save':   {method:'POST'},
//   'query':  {method:'GET', isArray:true},
//   'remove': {method:'DELETE'},
//   'delete': {method:'DELETE'} };

angular.module('clubApp')
  // Local Server
  .constant('ServerURL','http://127.0.0.1:8000/')

  // AWS Server
  // .constant('ServerURL','http://eb-idist-app-dev.ap-northeast-1.elasticbeanstalk.com/')

  //  Server
	.constant('ModelUrl', 'Develist')
	.constant('SolutionUrl', 'Club')

  // CORE
  .factory('SignInR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'SignIn/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
  .factory('TokenSignInR', function($resource, ServerURL, ModelUrl){ return $resource(ServerURL+'TokenSignIn/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })

  // MODEL

  // SOLUTION
  .factory('SiteR', function($resource, ServerURL, ModelUrl, SolutionUrl){ return $resource(ServerURL+ModelUrl+SolutionUrl+'Site/:id/',{id: '@id'},{'update': { method:'PATCH'}}); })
  .factory('ClubSendMailR', function($resource, ServerURL){ return $resource(ServerURL+'ClubSendMail/:id/',{id: '@id'},{'update': { method:'PATCH'}}); });
