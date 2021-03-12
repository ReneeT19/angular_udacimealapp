'use strict';
//import $ from 'jquery'; 
//window.$ = $; window.jQuery = $;
//import "froala-editor/js/froala_editor.pkgd.min.js";
/**
 * @ngdoc service
 * @name udacimealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udacimealsApp.
 */

var file = '/menu/menu.json';
console.log(file);
angular.module('udacimealsApp')
  .service('foodFinder', function ($scope, $http) {

    this.getMenu = function() {
      return $http.get( file ).then(function(res){ 
        $scope.menu = res.data;                
      });
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
