var app = angular.module('formGen', []);//Something here

app.config(['$interpolateProvider',function ($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
}])