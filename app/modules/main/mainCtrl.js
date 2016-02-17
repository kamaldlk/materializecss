'use strict';
angular.module("hexode.controllers")
    .controller('mainCtrl', ["$scope", "$state", "$rootScope",
        function ($scope, $state,  $rootScope) {
           $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

}]);