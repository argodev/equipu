'use strict';

/**
 * @ngdoc function
 * @name equipuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the equipuApp
 */
angular.module('equipuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
