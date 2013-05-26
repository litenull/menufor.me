app.controller('mainCtrl', function mainCtrl($scope, $http) {

   $scope.get_lunch = function() {
	$http.get('/api/recipe')
	.success(function(data, status, headers, config) {
	   $scope.recipe = data[0].ingredients	
	})
   }

   $scope.login = function() {
   	var data = {
         user: {
	  username:$('#username').val(),
	  password:$('#password').val()
  	 }
	}

	$http.post('/login', data)
	.success(function(data, status, headers, config) {
	  console.log(data);
	})
   }

   $http.get('/checkauth')
   .success(function(data, status, headers, config) {
	if (data == 'authenticated') {
	  $scope.authenticated = true
	}else{
	  $scope.authenticated = false
	}
   })

})
