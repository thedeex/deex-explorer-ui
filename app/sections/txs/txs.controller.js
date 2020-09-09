(function () {
    'use strict';

    angular.module('app.txs')
        .controller('txsCtrl', ['$scope', '$routeParams', '$location', 'networkService', txsCtrl]);

    function txsCtrl($scope, $routeParams, $location, networkService) {

        const path = $location.path();
        const name = $routeParams.name;

        if(name) {
            if (path.includes("txs")) {

                networkService.getTransactionMetaData(name, function (returnData) {
                    $scope.data = returnData;
                });

                networkService.getTransactionOperations(name, function (returnData) {
                    $scope.operations = returnData;
                    $scope.count = returnData.length;
                });
            }
        }
        else {
            if (path === "/txs") {
                networkService.getBigTransactions(function (returnData) {
                    $scope.transactions = returnData;
                });
            }
        }
    }

})();
