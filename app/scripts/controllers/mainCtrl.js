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
	  $scope.authenticated = true
	  $scope.username = data
	})
   }

   $http.get('/checkauth')
   .success(function(data, status, headers, config) {
	if (data.length > 0) {
	  $scope.authenticated = true
	  $scope.username = data
	}
   })

   $scope.add_ingredient = function() {
	var new_input = $('<input type="text" /><br>')
	new_input.insertBefore($('.controls'))
   }

   $scope.add_meal = function() {
	var ingredients = []
	$('#add').find('input').each(function() {
	  if($(this).val() != '') {
	    ingredients.push($(this).val())
	  }
        })

	$http.post('/api/recipe', { ingredients: ingredients }, function(data, status, headers, config) {
	 console.log(data)
	})

	$('#add').hide()
	$('#add_window').show()
   }

   $scope.show_add_window = function() {
	$('#add').show()
	$('#add_window').hide()
	
   }

   $scope.logout = function() {
	$http.get('/clearsession')
	.success(function(data, status, headers, config) {	
	  $scope.authenticated = false;
	})
   }

})
