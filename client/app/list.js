angular.module('myApp.listController', [])
  .controller('ListController', function ($scope, $window) {

    // this could have been an api call to the server if we wanted to store this data serverside
    $scope.allItemsList = [{"name":"Chocolate Chip","price":"$2.49","category":"Standard"},{"name":"Sugar","price":"$1.79","category":"Standard"},{"name":"Snickerdoodle","price":"$2.49","category":"Standard"},{"name":"Oatmeal Raisin","price":"$2.99","category":"Standard"},{"name":"Peanut Butter","price":"$2.99","category":"Standard"},{"name":"White Chocolate Macadamia","price":"$3.99","category":"Premium"},{"name":"Red Velvet","price":"$3.49","category":"Premium"},{"name":"Black and White","price":"$3.49","category":"Premium"},{"name":"Triple Chocolate","price":"$3.99","category":"Premium"},{"name":"White Chocolate Coconut Divine","price":"$5.99","category":"Signature"},{"name":"Dark Chocolate Pistachio Sea Salt","price":"$5.49","category":"Signature"},{"name":"Brown Butter Bourbon Spice","price":"$5.49","category":"Signature"},{"name":"Bacon Chocolate Chip","price":"$5.99","category":"Signature"}];

    // this function runs when the page loads.
    // it takes every item in allItems list and put it in displayedItemsList.
    $scope.init = function(){
      $scope.displayedItemsList = [];

      for (var i = 0; i < $scope.allItemsList.length; i++){
        $scope.displayedItemsList.push($scope.allItemsList[i]);
      }
    }

    // this variable will be given properties when a user types in the text field
    $scope.item = {};

    $scope.submitNewItem = function(){
      $scope.allItemsList.push($scope.item)
      $scope.item = {};
      $scope.init();
    }

    $scope.sortByName = function(){
      // this is a sloppy solution due to the On^2 time complexity but it will work for now

      // make a master list of all names that items have
      var allNames = [];
      for (var i = 0; i < $scope.displayedItemsList.length; i++){
        allNames.push($scope.displayedItemsList[i].name);
      }

      // sort that list of names
      allNames.sort();

      // clear displayedItemsList
      $scope.displayedItemsList = [];

      // loop through allNames and for each name, put the corresponding item into displayedItemsList
      for (var j = 0; j < allNames.length; j++){
        for (var k = 0; k < $scope.allItemsList.length; k++){
          if (allNames[j] === $scope.allItemsList[k].name){
            $scope.displayedItemsList.push($scope.allItemsList[k])
          }
        }
      }
    }

    // uses same algorithm as sortByName
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
            // we need to splice out the item from allItemsListCopy after we push it to displayedItemsList
            // because there may be multiple items with the same price. Will try to find another solution.
            $scope.allItemsListCopy.splice(l, 1)
          }
        }
      }
    }

    // uses same algorithm as sortByName
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
            // we need to splice out the item from allItemsListCopy after we push it to displayedItemsList
            // because there may be multiple items with the same category
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





