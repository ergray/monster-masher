'use strict';

angular.module('monsterMasher.main-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main-view', {
    templateUrl: 'main-view/main-view.html',
    controller: 'MainViewCtrl'
  });
}])

.controller('MainViewCtrl', ['$scope', function($scope) {
	$scope.top = [
		'blue',
		'green'
	],
	$scope.middle = [
		'yellow',
		'orange'
	],
	$scope.bottom = [
		'black',
		'white'
	]
}]);