'use strict';

angular.module('monsterMasher.complete-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/complete-view', {
    templateUrl: 'complete-view/complete-view.html',
    controller: 'CompleteCtrl'
  });
}])

.controller('CompleteCtrl', ['$scope', '$location', 'saveData', '$routeParams', function($scope, $location, saveData, $routeParams) {

	$scope.startAgain = function(){
		$location.path('/main-view').replace()
	},
	$scope.topImage = $routeParams.top,
	$scope.middleImage = $routeParams.middle,
	$scope.bottomImage = $routeParams.bottom,	
	$scope.emailLink = ("localhost:8000/#!/complete-view/"+$routeParams.top+"/"+$routeParams.middle+"/"+$routeParams.bottom)
}]);