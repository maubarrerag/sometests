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