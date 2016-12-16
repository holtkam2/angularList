angular.module('myApp', ['myApp.listController', 'ngRoute'])
.config(function ($routeProvider) {
  // we'll probably only need 1 route in this app but I'll set this up just in case
  $routeProvider
    .when('/', {
      templateUrl: 'app/list.html',
      controller: 'ListController'
    })
    .when('./route2', {
      templateUrl: 'app/list.html',
      controller: 'ListController'
    })
})