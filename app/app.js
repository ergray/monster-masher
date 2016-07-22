'use strict';

// Declare app level module which depends on views, and components
angular.module('monsterMasher', [
  'ngRoute',
  'monsterMasher.main-view',
  'monsterMasher.version',
  'monsterMasher.complete-view'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/main-view', {
  	templateUrl: 'main-view/main-view.html',
  	controller: 'MainViewCtrl'
  })
  .when('/complete-view/:top/:middle/:bottom', {
  	templateUrl: '/complete-view/complete-view.html',
  	controller: 'CompleteCtrl'
  })  
  .otherwise({redirectTo: '/main-view'});
}]).
factory('saveData', function(){
	var savedData = {};
	function set(data) {
		savedData = data
	};
	function get(){
		return savedData
	};
	return {
		set: set,
		get: get
	}
});
