var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/freesoft', {
			controller:'SoftController',
			templateUrl: '/views/freesoft.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});