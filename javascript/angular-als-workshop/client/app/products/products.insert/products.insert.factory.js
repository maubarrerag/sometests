module.exports = (function () {
    'use strict';

    return ['$http', '$q', function Products($http, $q) {
        var factory = {};
        factory.insertProduct = function (pr_json) {
            var deferred = $q.defer();
            deferred.resolve(
                $http.post('/api/products/insert', {
                    /* POST variables here */
                    pr_json: pr_json,
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
})();