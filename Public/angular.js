<<<<<<< HEAD
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
=======
var myApp = angular.module("myApp",["ui.router"]);

myApp.config(['$interpolateProvider',function ($interpolateProvider){
>>>>>>> 7b9956fcaf9c4a3957093eb7ef5d434eda5f1589
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
}])

<<<<<<< HEAD


=======
myApp.factory('Info', function(){
	var Info = {};
	Info.stuff = [{
						label = "First Name",
						inputType = "text",
						placeholder = "Michael",
						pizzaSauce = "fName"
				},
					{
						label = "Last Name",
						inputType = "text",
						placeholder = "Perez",
						pizzaSauce = "lName"
				},	

					{
						label = "Email",
						inputType = "text",
						placeholder = "myemail@host.com",
						pizzaSauce = "email"
				}]
	return Info;
})

function infoCtrl($scope, Info){
	$scope.info = Info;
}
	
	.config(function config($stateProvider) {
		$stateProvider.state("index", {
			url:"",
			controller: "FirstCtrl as first",
			templateUrl: "views/first.html"
		})
	})
	
	.controller("FirstCtrl", function FirstCtrl(){
		var first = this;

		first.greeting = "First";
	})
>>>>>>> 7b9956fcaf9c4a3957093eb7ef5d434eda5f1589
