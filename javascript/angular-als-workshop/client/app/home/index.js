module.exports = (function(angular){
	'use strict';
	return angular.module('app.home',[

	])
	.config(['$stateProvider',function($stateProvider){
		$stateProvider.state('home',{
			url:'/home',
			templateUrl:'app/home/home.html',
			controller: 'HomeController'
		})
	}])
	.controller('HomeController',require('./home.controller'))
})(angular)