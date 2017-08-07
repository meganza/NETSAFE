angular.module('Netsafe').controller('indexController', function($scope, $rootScope) {
  console.log('you are in index controller');

  $rootScope.predefinedPauses = false;

  $scope.activatePPD = function (){
    $rootScope.predefinedPauses = !$rootScope.predefinedPauses;
    console.log($rootScope.predefinedPauses);
  }

});
