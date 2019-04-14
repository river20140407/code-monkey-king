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

  /*
  $scope.addTask = function(){
    console.log($scope.task);

		$http.post('/api/tasks', $scope.task).then(function(response){
			window.location.href='#';
		}, function(error){
		  if(error){
		    throw error;
		  }
		});
	}

  $scope.removeTask = function(id){
      console.log("removing task " + id);
  		$http.delete('/api/tasks/'+id).then(function(response){
  			window.location.href='#';
  		}, function (error){
  				 if(error){
  		       throw error;
  	       }
  	     })
  }

  $scope.updateTask = function(id){
  		$http.put('/api/tasks/'+id, $scope.task).then(function(response){
  			window.location.href='#';
  		}, function(error) {
  		  if(error){
  		    throw error;
  		  }
  		});
  }*/

}]);