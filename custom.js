// Code goes here
(function(){

	var app = angular.module("GetGitHubUserInfo", []);

	var HelloController = function($scope, $http) {

	  var getError = function(reason) {
	  	$scope.error = "Could not fetch github user info.";
	  };

	  var onUserSubmit = function(response) {
	  	$scope.user = response.data;
	  };

	  $http.get("https://api.github.com/users/soman")
	       .then(onUserSubmit, getError)
	};

	app.controller("HelloController", HelloController);

}());