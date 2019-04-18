var app = angular.module('app');

app.controller('ViewController', ['$scope', '$http', '$location', '$q', '$routeParams', 
                function($scope, $http, $location, $q, $routeParams){
  var defer = $q.defer();
	$scope.getViews = function(){
		$http.get('/api/views').then(function(response){
		  $scope.views = response;
		  defer.resolve(response);
      
		   },function (error){
		     if(error){
		      throw error;
		     }
		   })
  }

  console.log(defer.promise.$$state.value);


}]);

