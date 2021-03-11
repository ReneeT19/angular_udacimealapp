'use strict';

/**
 * @ngdoc function
 * @name udacimealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udacimealsApp
 */

/*
angular.module('udacimealsApp')
  .controller('MenuCtrl', function () {
    this.id = 'strawberry-pudding';
    this.name = 'Strawberry Pudding';
    this.img = 'strawberry-pudding.jpg';
    this.rating = '4.6';
  });
*/

//above is the single item controller, below is an array of menu item objects (ng-repeat is useful)
  //add properties to the controller, and controller to the module

  angular.module('udacimealsApp')
  .controller('MenuCtrl', function () {
    this.items = [
      {
        id: 'chicken-pot-pie',
        name: 'Chicken Pot Pie',
        img: 'chicken-pot-pie.jpg',
        calories: 430,
        rating: 4.1
      },
      {
        id: 'hot-pot',
        name: 'Hot Pot',
        img: 'hot-pot.jpg',
        calories: 1200,
        rating: 5
      },
      {
        id: 'mango-rice-pudding',
        name: 'Mango Rice Pudding',
        img: 'mango-rice-pudding.jpg',
        calories: 650,
        rating: 3.7
      },
    ]

    this.increment = function(item) {
      //item rating += 0.1;
      item.rating = ((item.rating * 10) + 1) / 10;
    };

    this.decrement = function(item) {
      //item rating -= 0.1;
      item.rating = ((item.rating * 10) - 1) / 10;
    };

  });

  