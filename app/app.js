'use strict';

// Declare app level module which depends on views, and components
angular.module('monsterMasher', [
  'ngRoute',
  'monsterMasher.main-view',
  'monsterMasher.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main-view'});
}]);
