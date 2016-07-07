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
		{counter: 1},
		'blue',
		'green'
	],
	$scope.middle = [
		{counter: 1},
		'yellow',
		'orange'
	],
	$scope.bottom = [
		{counter: 1},
		'black',
		'white'
	],
	$scope.clickThrough = function($event){
		var tarRow = $event.srcElement.id;
		var tarDir = $event.srcElement.innerText;
		console.log(tarRow)
		//regular expression to extract text before Row
		//use variable to choose the correct scope array

		//move left or right based on RegEx extract of innerText
		//move counter back or forth
		//if you are at either end of the array, auto set counter to other end
	}
}]);