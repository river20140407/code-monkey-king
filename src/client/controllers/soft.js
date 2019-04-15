var app = angular.module('app');

app.controller('SoftController', ['$scope', '$http', '$location', '$routeParams', 
                function($scope, $http, $location, $routeParams){
	$scope.getSoft = function(){
		$http.get('/api/soft').then(function (response){
		  $scope.soft = response; // console.log($scope.tasks.data[1]);
		   },function (error){
		     if(error){
		      throw error;
		     }
		   })
  }

}]);