(function () {
    'use strict';

    angular.module('app.objects')
        .controller('objectsCtrl', ['$scope', '$routeParams','networkService', objectsCtrl]);

    function objectsCtrl($scope, $routeParams, networkService) {

        const name = $routeParams.name;
        networkService.getObject(name, function (returnData) {
            $scope.data = returnData;
        });
    }
})();
