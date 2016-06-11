var testApp = angular.module('testApp',['ngResource']);

testApp.controller('mainCtrl',['$scope',function($scope,getData) {

getData.then(function(response){

var trade = [];
		$scope.responseArray = response.data;


		
});
	}]);


	testApp.factory('getData',['$resource',function($resource ){
	return $resource ('trades.json');
}]);