var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/author', {
			templateUrl: '/views/author.html'
	})
	.when('/donations', {
			templateUrl: '/views/donations.html'
	})
	.when('/freesoft', {
			controller:'SoftController',
			templateUrl: '/views/freesoft.html'
	})
	.when('/community', {
			controller:'PostController',
			templateUrl: '/views/community.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});