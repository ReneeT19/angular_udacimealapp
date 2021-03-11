'use strict';

/**
 * @ngdoc function
 * @name udacimealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udacimealsApp
 */
angular.module('udacimealsApp')
  .controller('MenuCtrl', function () {
    this.id = 'strawberry-pudding';
    this.name = 'Strawberry Pudding';
    this.img = 'strawberry-pudding.jpg';
    this.rating = 5;
  });

  //add properties to the controller, and controller to the module