(function () {
	'use strict';

	angular
		.module('app.home')
		.factory('HomeDataService', HomeDataService);

	HomeDataService.$inject = ['$http', 'Logger', 'config'];

	function HomeDataService($http, Logger, config) {
		var services = {
			getData: getData
		};

		return services;

		/////

		function getData() {
			return $http.get(config.API_URL + '/api/data.json')
				.then(getDataComplete)
				.catch(getDataFailed);

				function getDataComplete(response) {
					return response.data;
				}

				function getDataFailed(error) {
					Logger.error('APP ERROR' + '\nRequest URL: ' + error.config.url + '\nRequest status: ' + error.xhrStatus + '\nError code: ' + error.status + '\nError text: ' + error.statusText + '\nError object: ' + JSON.stringify(error));
				}			
		}
	}

})();