var app = angular.module('formGen', ["ui.router"])
		   
		.config(['',function() {
			$stateProvider.state('',{
				url:"",
				controller: 'mainController as main',
				templateUrl: 'templates/template.html'
					
				}])
			})	
		}]) 

	 	.controller('mainController', function(){

 	})

app.config(['$interpolateProvider',function ($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
}])



