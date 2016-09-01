(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function(angular){
	'use strict'
	return ['$scope', function AppController($scope){
	$scope.name = ""
	$scope.age = 0

	$scope.hello = function(){
		if($scope.name == "" && $scope.age < 1){
			return "Hello anonymous"
		} else
			return "Hello "+$scope.name+", you are "+$scope.age+" years old... right?"
	}
}];

})(angular);
},{}],2:[function(require,module,exports){

(function(angular){

	'use strict'

angular.module('app',[

]).controller('AppController', require('./app.controller'))

})(angular)
},{"./app.controller":1}]},{},[2]);
