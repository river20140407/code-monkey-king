var app = angular.module('app');

app.controller('PostController', ['$scope', '$http', '$location', '$routeParams', 
                function($scope, $http, $location, $routeParams){
	$scope.getPosts = function(){
		$http.get('/api/posts').then(function (response){
		  $scope.posts = response; // console.log($scope.tasks.data[1]);
		   },function (error){
		     if(error){
		      throw error;
		     }
		   })
  }

  $scope.addPost = function(){
    console.log($scope.post);

		$http.post('/api/posts', $scope.post).then(function(response){
      getPosts();
			//window.location.href='#!/community';
		}, function(error){
		  if(error){
		    throw error;
		  }
		});
	}

}]);