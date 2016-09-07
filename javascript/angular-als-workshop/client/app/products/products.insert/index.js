module.exports = (function (angular) {
    'use strict';

    return angular.module('app.products.insert', [
        
    ])
        .config(['$stateProvider', function ($stateProvider) {
            //set up the states
            $stateProvider
                .state('products_insert', {
                    url: "/products/insert",
                    templateUrl: "app/products/products.insert/products.insert.html",
                    controller: 'ProductsInsertController'
                })
        }])
        .factory('productsInsertFactory', require('./products.insert.factory'))
        .controller('ProductsInsertController', require('./products.insert.controller'))

})(angular)