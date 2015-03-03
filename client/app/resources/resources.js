'use strict';

angular.module('equipuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/resources', {
        templateUrl: 'app/resources/resources.html',
        controller: 'ResourcesCtrl'
      });
  });
