var myApp = angular.module("myApp",["ui.router"]);

myApp.config(['$interpolateProvider',function ($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
}])

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