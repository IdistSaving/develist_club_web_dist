'use strict';

angular.module("clubApp")
	.service('scrollS', function($document){

		this.goElement = function(selector){
			console.log("selector",selector);
      var element = angular.element(document.querySelector(selector));
      var offset = 0;
      var duration = 1000;
			console.log("element",element);
      $document.scrollToElement(element, offset, duration);
			// console.log($document)
    };
  });
