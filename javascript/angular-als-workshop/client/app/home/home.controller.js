module.exports = (function(angular){

	return ['$scope',function HomeController($scope){
		$scope.view = {
			"header":"Home",
			"msg" : "Welcome Home!"
		};
	}]
})(angular);