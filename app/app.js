'use strict';

// Declare app level module which depends on views, and core components
angular.module('cooperforteApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pessoa'});
}]);
