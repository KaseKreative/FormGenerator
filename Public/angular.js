var app = angular.module('formGen', ["ui.router"])
		   
		.config(function config($stateProvider) {
			$stateProvider.state('index',{
				url:"",
				controller: 'mainController as main',
				templateUrl: 'templates/template.html'
				})
			$stateProvider.state('second',{
				url:"/second",
				controller: 'secondController as second',
				templateUrl: 'templates/template2.html'
				})
			})	

		.service("greeting", function Greeting(){
			var greeting = this;
			greeting.message = 'Default';
		}) 

	 	.controller('mainController', function mainController(greeting){
	 			var main = this;
	 			main.greeting = greeting;
 		})

	 	.controller('secondController', function secondController(greeting){
	 			var second = this;
	 			second.greeting = greeting;
 		})

app.config(['$interpolateProvider',function ($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
}])



