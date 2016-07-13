'use strict';

angular.module('monsterMasher.complete-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/complete-view', {
    templateUrl: 'complete-view/complete-view.html',
    controller: 'CompleteCtrl'
  });
}])

.controller('CompleteCtrl', ['$scope', '$location', function($scope, $location) {

	$scope.sendLink = function(){
		//email link hash to friends
	},
	$scope.resetImages = function(){

	},
	$scope.startAgain = function(){
		$location.path('/main-view').replace()
	}

}]);