module.exports = (function () {
    'use strict';

    return ['$http', '$q', function Products($http, $q) {
        var factory = {};
        factory.getProducts = function () {
            var deferred = $q.defer();
            deferred.resolve(
                $http.post('/api/products/', {
                    /* POST variables here */
                    no_chache: new Date().getMilliseconds(),
                }).success(function (data, status, headers, config) {
                    return data;
                }).error(function (data, status, headers, config) {
                    return { "status": false };
                })
            );
            return deferred.promise;
        };
        return factory;
    }]
})(angular);