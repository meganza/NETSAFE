angular.module('Netsafe').controller('indexController', function($scope, $rootScope) {
  console.log('you are in index controller');

  if($scope.clickedTool){
    $scope.clickedTool = !$scope.clickedTool;
  }

  if($scope.clicked){
    $scope.clicked = !$scope.clicked;
  }

  $rootScope.predefinedPauses = false;

  $scope.activatePPD = function (){
    $rootScope.predefinedPauses = !$rootScope.predefinedPauses;
    console.log($rootScope.predefinedPauses);
  }

});
