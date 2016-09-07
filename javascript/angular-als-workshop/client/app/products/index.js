module.exports = (function (angular) {
    'use strict';

    return angular.module('app.products', [
        require('./productsInsert').name
    ])
        .config(['$stateProvider', function ($stateProvider) {
            //set up the states
            $stateProvider
                .state('products', {
                    url: "/products",
                    templateUrl: "app/products/products.html",
                    controller: 'ProductsController'
                })
        }])
        .factory('productsFactory', require('./products.factory'))
        .controller('ProductsController', require('./products.controller'))

})(angular);