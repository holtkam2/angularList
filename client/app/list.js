angular.module('myApp.listController', [])
  .controller('ListController', function ($scope, $window) {

    $scope.allItemsList = [{"name":"Chocolate Chip","price":"$2.49","category":"Standard"},{"name":"Sugar","price":"$1.79","category":"Standard"},{"name":"Snickerdoodle","price":"$2.49","category":"Standard"},{"name":"Oatmeal Raisin","price":"$2.99","category":"Standard"},{"name":"Peanut Butter","price":"$2.99","category":"Standard"},{"name":"White Chocolate Macadamia","price":"$3.99","category":"Premium"},{"name":"Red Velvet","price":"$3.49","category":"Premium"},{"name":"Black and White","price":"$3.49","category":"Premium"},{"name":"Triple Chocolate","price":"$3.99","category":"Premium"},{"name":"White Chocolate Coconut Divine","price":"$5.99","category":"Signature"},{"name":"Dark Chocolate Pistachio Sea Salt","price":"$5.49","category":"Signature"},{"name":"Brown Butter Bourbon Spice","price":"$5.49","category":"Signature"},{"name":"Bacon Chocolate Chip","price":"$5.99","category":"Signature"}];

    $scope.init = function(){
      $scope.displayedItemsList = [];

      for (var i = 0; i < $scope.allItemsList.length; i++){
        $scope.displayedItemsList.push($scope.allItemsList[i]);
      }
    }

    $scope.item = {};

    $scope.submitNewItem = function(){
      $scope.allItemsList.push($scope.item)
      $scope.item = {};
      $scope.init();
    }

    $scope.sortByName = function(){
      var allNames = [];
      for (var i = 0; i < $scope.displayedItemsList.length; i++){
        allNames.push($scope.displayedItemsList[i].name);
      }

      allNames.sort();

      $scope.displayedItemsList = [];

      for (var j = 0; j < allNames.length; j++){
        for (var k = 0; k < $scope.allItemsList.length; k++){
          if (allNames[j] === $scope.allItemsList[k].name){
            $scope.displayedItemsList.push($scope.allItemsList[k])
          }
        }
      }
    }

    $scope.sortByPrice = function(){
      var allPrices = [];
      for (var i = 0; i < $scope.displayedItemsList.length; i++){
        allPrices.push($scope.displayedItemsList[i].price);
      }

      allPrices.sort();

      $scope.displayedItemsList = [];
      $scope.allItemsListCopy = [];

      for (var j = 0; j < $scope.allItemsList.length; j++){
        $scope.allItemsListCopy.push($scope.allItemsList[j])
      }

      for (var k = 0; k < allPrices.length; k++){
        for (var l = 0; l < $scope.allItemsListCopy.length; l++){
          if (allPrices[k] === $scope.allItemsListCopy[l].price){
            $scope.displayedItemsList.push($scope.allItemsListCopy[l])
            $scope.allItemsListCopy.splice(l, 1)
          }
        }
      }
    }

    $scope.sortByCategory = function(){
      var allCategories = [];
      for (var i = 0; i < $scope.displayedItemsList.length; i++){
        allCategories.push($scope.displayedItemsList[i].category);
      }

      allCategories.sort();

      $scope.displayedItemsList = [];
      $scope.allItemsListCopy = [];

      for (var j = 0; j < $scope.allItemsList.length; j++){
        $scope.allItemsListCopy.push($scope.allItemsList[j])
      }

      for (var k = 0; k < allCategories.length; k++){
        for (var l = 0; l < $scope.allItemsListCopy.length; l++){
          if (allCategories[k] === $scope.allItemsListCopy[l].category){
            $scope.displayedItemsList.push($scope.allItemsListCopy[l])
            $scope.allItemsListCopy.splice(l, 1)
          }
        }
      }
    }

    $scope.filterByStandard = function(){
      $scope.filteredCategory = "Standard";
    }

    $scope.filterByPremium = function(){
      $scope.filteredCategory = "Premium";
    }

    $scope.filterBySignature = function(){
      $scope.filteredCategory = "Signature";
    }

  });





