module.exports = (function (angular) {
    'use strict';
    // lo que sea
    return ['$scope', 'productsFactory', function ProductsController($scope, productsFactory) {
        $scope.view = {
            "header": "Products",
            "msg": "Asynchronous Product List"
        };

        $scope.$on('$viewContentLoaded', function () {
            // this code is executed after the view is loaded
            productsFactory.getProducts().then(function (promise) {
                if (angular.isArray(promise.data)) {
                    $scope.products = promise.data;
                }
            })
        });

    }];

})(angular);