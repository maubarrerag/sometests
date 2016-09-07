
(function(angular){

	'use strict'

angular.module('app',[
	'ui.router',
	require('./home').name,
	require('./products').name,
	require('./404').name
])
.config(['$urlRouterProvider',function($urlRouterProvider){
	$urlRouterProvider.when('','/home');
	$urlRouterProvider.when('/','/home');
	$urlRouterProvider.otherwise("/404");
}])

.controller('AppController', require('./app.controller'))

})(angular)