(function () {
	'use strict';

	angular
		.module('app.home')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeDataService'];

	function HomeController(HomeDataService) {
		var home = this;

		home.appName = "Angular Essentials";
		home.getSampleData = getSampleData;
		home.sampleData = "";

		/////

		function getSampleData() {
			return HomeDataService.getData()
			            .then(function(data) {
			            	home.sampleData = data;
			            });
		}

	}

})();