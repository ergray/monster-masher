'use strict';

angular.module('monsterMasher.main-view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main-view', {
    templateUrl: 'main-view/main-view.html',
    controller: 'MainViewCtrl'
  });
}])

.controller('MainViewCtrl', ['$scope', '$location', '$http', 'saveData', function($scope, $location, $http, saveData) {
	// $scope.choices,

	$http.get('http://localhost:8000//example.json')
		.then(function(success){
			$scope.choices = success.data;
			console.log(success.data)},
			function(error){
			console.log(error)
		})
		.then(function(){
			$scope.topImage = $scope.choices.top.piece[0],
			$scope.middleImage = $scope.choices.middle.piece[0],
			$scope.bottomImage = $scope.choices.bottom.piece[0]
		}),
	$scope.top = [
		{counter: 0}
	],
	$scope.middle = [
		{counter: 0}
	],
	$scope.bottom = [
		{counter: 0}
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
			if ($scope[result[1]][0].counter === $scope.choices[result[1]].piece.length-1){
				$scope[result[1]][0].counter = -1
			};
			$scope[result[1]][0].counter +=1;
			$scope[result[1]+'Image'] = $scope.choices[result[1]].piece[$scope[result[1]][0].counter];
		} else if (resultDir[1] === 'left'){
			if ($scope[result[1]][0].counter === 0){
				$scope[result[1]][0].counter = $scope.choices[result[1]].piece.length
			};			
			$scope[result[1]][0].counter -=1;
			$scope[result[1]+'Image'] = $scope.choices[result[1]].piece[$scope[result[1]][0].counter];
		}	
	};
	$scope.saveImage = function(details){
		var collectedData = [$scope.topImage, $scope.middleImage, $scope.bottomImage];
		$location.path('/complete-view/'+collectedData[0]+'/'+collectedData[1]+'/'+collectedData[2])	
	},
	$scope.resetImages = function(){
		//Reset all counters, and align images to one template
		$scope.top[0].counter = 0;
		$scope.middle[0].counter = 0;
		$scope.bottom[0].counter = 0;
		$scope.topImage = $scope.choices.top.piece[0];
		$scope.middleImage = $scope.choices.middle.piece[0];
		$scope.bottomImage = $scope.choices.bottom.piece[0]	
	}
}]);