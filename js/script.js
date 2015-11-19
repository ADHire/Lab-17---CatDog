var app = angular.module('catdog', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/partial1.html',
		controller: 'routeCtrl'
	});

	$routeProvider.when('/view2', {
		templateUrl: 'views/partial2.html',
		controller: 'routeCtrl'
	});

	$routeProvider.when('/view2', {
		templateUrl: 'views/partial3.html',
		controller: 'routeCtrl'
	});

	$routeProvider.when('/view2', {
		templateUrl: 'views/partial4.html',
		controller: 'routeCtrl'
	});
});

app.controller('routeCtrl', function() {

});