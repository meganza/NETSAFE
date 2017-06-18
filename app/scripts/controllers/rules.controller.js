angular.module('Netsafe').controller('rulesController', function($scope, $timeout) {
	console.log('you are in rulesController');

  $timeout(function() {
    $('.carousel').slick({
      dots: true,
    });
  }, 1);

  $scope.showAnswers1 = function(){
    $scope.answer1Clicked1 = true;
    $scope.answer2Clicked1 = true;
    $scope.answer3Clicked1 = true;
    $scope.answer4Clicked1 = true;
    $scope.answer5Clicked1 = true;
  };

  $scope.showAnswers2 = function(){
    $scope.answer1Clicked2 = true;
    $scope.answer2Clicked2 = true;
    $scope.answer3Clicked2 = true;
    $scope.answer4Clicked2 = true;
    $scope.answer5Clicked2 = true;
  };

  $scope.showAnswers3 = function(){
    $scope.answer1Clicked3 = true;
    $scope.answer2Clicked3 = true;
    $scope.answer3Clicked3 = true;
    $scope.answer4Clicked3 = true;
    $scope.answer5Clicked3 = true;
  };

  $scope.showAnswers4 = function(){
    $scope.answer1Clicked4 = true;
    $scope.answer2Clicked4 = true;
    $scope.answer3Clicked4 = true;
    $scope.answer4Clicked4 = true;
    $scope.answer5Clicked4 = true;
  };

  $scope.showAnswers5 = function(){
    $scope.answer1Clicked5 = true;
    $scope.answer2Clicked5 = true;
    $scope.answer3Clicked5 = true;
    $scope.answer4Clicked5 = true;
    $scope.answer5Clicked5 = true;
  };

  $scope.showAnswers6 = function(){
    $scope.answer1Clicked6 = true;
    $scope.answer2Clicked6 = true;
    $scope.answer3Clicked6 = true;
    $scope.answer4Clicked6 = true;
    $scope.answer5Clicked6 = true;
  };

  $scope.showAnswers7 = function(){
    $scope.answer1Clicked7 = true;
    $scope.answer2Clicked7 = true;
    $scope.answer3Clicked7 = true;
    $scope.answer4Clicked7 = true;
    $scope.answer5Clicked7 = true;
  };

  $scope.showAnswers8 = function(){
    $scope.answer1Clicked8 = true;
    $scope.answer2Clicked8 = true;
    $scope.answer3Clicked8 = true;
    $scope.answer4Clicked8 = true;
    $scope.answer5Clicked8 = true;
  };

  $scope.showAnswers9 = function(){
    $scope.answer1Clicked9 = true;
    $scope.answer2Clicked9 = true;
    $scope.answer3Clicked9 = true;
    $scope.answer4Clicked9 = true;
    $scope.answer5Clicked9 = true;
  };

  $scope.showAnswers10 = function(){
    $scope.answer1Clicked = true;
    $scope.answer2Clicked = true;
    $scope.answer3Clicked = true;
    $scope.answer4Clicked = true;
    $scope.answer5Clicked = true;
  };

});
