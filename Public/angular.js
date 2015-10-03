var app = angular.module("pizzaSauce",["ui.router"]);

app.config(['$interpolateProvider',function ($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
}])
	
	.config(function config($stateProvider) {
		url:"",
		controller: "FirstCtrl as first",
		templateUrl: "../views/layouts/first.html"
	})
	
	.controller("FirstCtrl", function FirstCtrl(){
		var first = this;

		first.greeting = "First";
	})