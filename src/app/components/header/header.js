(function () {
    'use strict';

    angular
        .module('components.header')
        .directive('header', header);

    header.$inject = ['config'];

    function header(config) {
        var directive = {
            controller: function ($scope, config) {
                $scope.appName = config.APP_NAME;
            },            
            templateUrl: 'src/app/components/header/header.html',
            link: function(scope, element, attr) {
                //
            }
        };

        return directive;
    }

})();