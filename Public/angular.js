var myApp = angular.module("myApp",["ui.router"])
		   
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
 		.controller('infoCtrl', infoCtrl);



myApp.config(['$interpolateProvider',function ($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
}]);

// HEAD

myApp.factory('Info', function(){
	var Info = {};
	Info.stuff = [
					{
						label : "First Name",
						inputType : "text",
						placeholder : "Michael",
						pizzaSauce : "fName"
					},
					{
						label : "Last Name",
						inputType : "text",
						placeholder : "Perez",
						pizzaSauce : "lName"
					},	

					{
						label : "Email",
						inputType : "text",
						placeholder : "myemail@host.com",
						pizzaSauce : "email"
					},
					{
						label : "Male",
						inputType : "radio",
						pizzaSauce : "gender",
						value : 'Male',
						name : 'theGender',
						checked : 'checked'
					},
					{
						label : 'Female',
						inputType : "radio",
						pizzaSauce : "gender",
						value : 'Female',
						name : 'theGender',
						checked : ''
					},
					{
						label : 'Submit',
						inputType : 'submit',
						pizzaSauce : 'submitBtn',
						value : 'Submit'
					},
					{
						inputType : 'hidden',
						pizzaSauce : 'hiddenInput',
						placeholder : 'This is a hidden input!'
					}	
				];
	return Info;
})

function infoCtrl($scope, Info){
	$scope.info = Info;
}

