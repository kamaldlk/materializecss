'use strict';
angular.module("hexode").config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
function ($stateProvider, $urlRouterProvider,  $httpProvider) {

                
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/modules/main/main.html',
                controller: 'mainCtrl'
            })
            
    }
]);