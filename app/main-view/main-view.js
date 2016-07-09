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
		'green',
		'turqoise'
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
		//regular expression to extract text before Row
		//use variable to choose the correct scope array
		var extractedRow = new RegExp("(.*)Row");
		var result = extractedRow.exec(tarRow);
		var extractedDir = new RegExp("(.*) arrow");
		var resultDir = extractedDir.exec(tarDir);


		//move left or right based on RegEx extract of innerText
		//move counter back or forth
		//if you are at either end of the array, auto set counter to other end
		if (resultDir[1] === 'right'){
			if ($scope[result[1]][0].counter === $scope[result[1]].length-1){
				$scope[result[1]][0].counter = 0
			};
			$scope[result[1]][0].counter +=1;
			$scope[result[1]+'Image'] = $scope[result[1]][$scope[result[1]][0].counter];
		} else if (resultDir[1] === 'left'){
			if ($scope[result[1]][0].counter === 1){
				$scope[result[1]][0].counter = $scope[result[1]].length
			};			
			$scope[result[1]][0].counter -=1;
			$scope[result[1]+'Image'] = $scope[result[1]][$scope[result[1]][0].counter];
		}	
	};
	$scope.saveImage = function(){

	},
	$scope.resetImages = function(){
		$scope.top[0].counter = 1;
		$scope.middle[0].counter = 1;
		$scope.bottom[0].counter = 1
		$scope.topImage = $scope.top[$scope.top[0].counter];
		$scope.middleImage = $scope.middle[$scope.middle[0].counter];
		$scope.bottomImage = $scope.bottom[$scope.bottom[0].counter]		
	},
	$scope.topImage = $scope.top[$scope.top[0].counter];
	$scope.middleImage = $scope.middle[$scope.middle[0].counter];
	$scope.bottomImage = $scope.bottom[$scope.bottom[0].counter];
}]);