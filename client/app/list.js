angular.module('myApp.listController', [])
  .controller('ListController', function ($scope, $window) {

    $scope.allItemsList = [{"name":"Chocolate Chip","price":"$2.49","category":"Standard"},{"name":"Sugar","price":"$1.79","category":"Standard"},{"name":"Snickerdoodle","price":"$2.49","category":"Standard"},{"name":"Oatmeal Raisin","price":"$2.99","category":"Standard"},{"name":"Peanut Butter","price":"$2.99","category":"Standard"},{"name":"White Chocolate Macadamia","price":"$3.99","category":"Premium"},{"name":"Red Velvet","price":"$3.49","category":"Premium"},{"name":"Black and White","price":"$3.49","category":"Premium"},{"name":"Triple Chocolate","price":"$3.99","category":"Premium"},{"name":"White Chocolate Coconut Divine","price":"$5.99","category":"Signature"},{"name":"Dark Chocolate Pistachio Sea Salt","price":"$5.49","category":"Signature"},{"name":"Brown Butter Bourbon Spice","price":"$5.49","category":"Signature"},{"name":"Bacon Chocolate Chip","price":"$5.99","category":"Signature"}];

    $scope.item = {};

    $scope.displayedList = [];

    $scope.submitNewItem = function(){
      console.log("submitNewItem function called")
      $scope.allItemsList.push($scope.item)
    }

    $scope.sortByName = function(){
      // this is a sloppy solution due to the O^2 time complexity but it'll work for now
      var allNames = [];

      // get all the names and put it into an array
      for (var i = 0; i < $scope.allItemsList.length; i++){
        allNames.push($scope.allItemsList[i].name);
      }

      // sort that array
      allNames.sort();

      // loop through that array. For each name, get the object it belongs to and push it to displayedList
      for (var j = 0; j < allNames.length; j++){
        for (var k = 0; k < $scope.allItemsList.length; k++){
          if ($scope.allItemsList[k].name === allNames[j]){
            $scope.displayedList.push($scope.allItemsList[k]);
          }
        }
      }
    }

    $scope.sortByPrice = function(){
      console.log("function sortByPrice ran!")
    }

    $scope.sortByCategory = function(){
      console.log("function sortByCategory ran!")
    }

  });