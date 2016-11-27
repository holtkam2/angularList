angular.module('myApp', ['myApp.listController', 'ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/list.html',
      controller: 'ListController'
    })
})