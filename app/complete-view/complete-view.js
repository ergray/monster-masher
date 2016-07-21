'use strict';

angular.module('monsterMasher.complete-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/complete-view', {
    templateUrl: 'complete-view/complete-view.html',
    controller: 'CompleteCtrl'
  });
}])

.controller('CompleteCtrl', ['$scope', '$location', 'saveData', function($scope, $location, saveData) {
	
	$scope.sendLink = function(){
		//email link hash to friends
	},
	$scope.resetImages = function(){

	},
	$scope.startAgain = function(){
		$location.path('/main-view').replace()
	},
	console.log(saveData.get())
	$scope.topImage = saveData.get()[0],
	$scope.middleImage = saveData.get()[1],
	$scope.bottomImage = saveData.get()[2],
	$scope.emailLink = ("localhost:8000/#!/complete-view/"+saveData.get()[0]+"/"+saveData.get()[1]+"/"+saveData.get()[2])
}]);