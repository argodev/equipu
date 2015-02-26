'use strict';

/**
 * @ngdoc function
 * @name equipuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the equipuApp
 */
angular.module('equipuApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
