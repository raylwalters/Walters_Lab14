var app = angular.module('routingModule', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/view1',
	{
		controller: 'simpleController',
		templateUrl: 'view1.html'
	})
	.when('/view2',
	{
		controller: 'simpleController',
		templateUrl: 'view2.html'
	})
	.when('/view3',
	{
		controller: 'simpleController',
		templateUrl: 'view3.html'
	})
	.when('/view4',
	{
		controller: 'simpleController',
		templateUrl: 'view4.html'
	})
	.otherwise(
	{
		redirectTo: '/error404.html',
		templateUrl: 'viewFail.html'
	})
});