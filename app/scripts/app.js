var app = angular.module('menufor.me', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'scripts/views/main.html', 
      }).
      when('/recipe', {
        templateUrl: 'postShow.html', 
        controller: "PostShowCtrl"
      }).
      when('/posts/add', {
        templateUrl: 'postAdd.html', 
        controller: "PostAddCtrl"
      }).
      when('/post/:id/edit', {
        templateUrl: 'postEdit.html', 
        controller: "PostEditCtrl"
      });
    $locationProvider.html5Mode(true);
  }]);
