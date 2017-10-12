(function () {
	'use strict';

	angular
		.module('blocks.router')
		.config(RouteConfig);

	RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RouteConfig($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'src/app/home/home.html',
				controller: 'HomeController as home'
			});
	}

})();