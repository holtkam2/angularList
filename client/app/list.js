angular.module('myApp.listController', [])
  .controller('ListController', function ($scope, $window) {
    $scope.displayByName = function(){
      console.log("function displayByName ran!")
    }
    $scope.displayByPrice = function(){
      console.log("function displayByPrice ran!")
    }
    $scope.displayByCategory = function(){
      console.log("function displayByCategory ran!")
    }
  });