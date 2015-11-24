var app = angular.module('catDog', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/dog', {
    templateUrl: '/views/dog.html',
    controller: 'routeCtrl'
  });
  
  $routeProvider.when('/charlie', {
    templateUrl: '/views/charlie.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/cat', {
    templateUrl: '/views/cat.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/', {
    templateUrl: '/views/lambchop.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/', {
    templateUrl: '/views/turtle.html',
    controller: 'routeCtrl'
  });

  $routeProvider.otherwise( { 
  	redirectTo: '/' });

});

app.controller('routeCtrl', function(){
  
});