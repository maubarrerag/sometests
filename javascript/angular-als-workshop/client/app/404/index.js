module.exports = (function(angular){
	'use strict';
	return angular.module('app.404',[

	])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('404',{
			url:'/404',
			templateUrl:'app/404/404.html',
			controller: '404Controller'
		})
	}])
	.controller('404Controller', require('./404.controller'))
})(angular)