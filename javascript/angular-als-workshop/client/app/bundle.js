(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = (function(angular){

	return ['$scope',function e404Controller($scope){
		$scope.view = {
			"header":"Page not found 404",
			"msg" : "Try another page"
		};
	}]
})(angular);
},{}],2:[function(require,module,exports){
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
},{"./404.controller":1}],3:[function(require,module,exports){
module.exports = (function(angular){
	'use strict'
	return ['$scope', function AppController($scope){
	$scope.name = "Angular"

	$scope.hello = function(){
		return "Hello World "+$scope.name;
	}
}];

})(angular);
},{}],4:[function(require,module,exports){

(function(angular){

	'use strict'

angular.module('app',[
	'ui.router',
	require('./home').name,
	require('./404').name
])
.config(['$urlRouterProvider',function($urlRouterProvider){
	$urlRouterProvider.when('','/home');
	$urlRouterProvider.when('/','/home');
	$urlRouterProvider.otherwise("/404");
}])

.controller('AppController', require('./app.controller'))

})(angular)
},{"./404":2,"./app.controller":3,"./home":6}],5:[function(require,module,exports){
module.exports = (function(angular){

	return ['$scope',function HomeController($scope){
		$scope.view = {
			"header":"Home",
			"msg" : "Welcome Home!"
		};
	}]
})(angular);
},{}],6:[function(require,module,exports){
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
},{"./home.controller":5}]},{},[4]);
