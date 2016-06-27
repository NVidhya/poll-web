var app = angular.module('pollApp', [
	'ui.router',
	'ngResource',
	'angular-storage',
	'angular-jwt'
]);
app.value('RESTApiPath', 'http://104.199.174.185:30222/api');
