'use strict';

angular.module('equipuApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      { 'title': 'Home', 'link': '/' },
      { 'title': 'Resources', 'link': '/resources' },
      { 'title': 'Clubs Site', 'link': 'http://kids4truth.com/clubs' },
      { 'title': 'Main Site', 'link': 'http://kids4truth.com' },
      { 'title': 'Online Store', 'link': 'http://kids4truth.com/store' },
      { 'title': 'Devotions', 'link': 'http://kids4truth.com/devos' }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
