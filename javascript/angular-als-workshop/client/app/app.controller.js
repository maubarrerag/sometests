module.exports = (function(angular){
	'use strict'
	return ['$scope', function AppController($scope){
	$scope.name = "Angular"

	$scope.hello = function(){
		return "Hello World "+$scope.name;
	}
}];

})(angular);