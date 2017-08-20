angular.module('testApp')
       .controller('HomeCtrl', [
         '$scope', function ($scope) {
           $scope.message = "Hello, World!";
         }
]);
