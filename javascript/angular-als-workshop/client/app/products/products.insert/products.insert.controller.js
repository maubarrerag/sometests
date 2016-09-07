module.exports = (function (angular) {
    'use strict';
    // lo que sea
    return ['$scope', 'productsInsertFactory', '$state', function ProductsInsertController($scope, productsInsertFactory, $state) {
        $scope.view = {
            "header": "Products Insert",
            "msg": "Asynchronous Product List"
        };
        $scope.insert = function () {
                productsInsertFactory.insertProduct($scope.pr_json).then(function (promise) {
                    $state.go('products');
                })
        }

        $scope.$on('$viewContentLoaded', function () {
            
        });

    }];

})(angular);
