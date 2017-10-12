(function () {
	'use strict';

	angular
		.module('app')
		.constant('config', {
			'APP_NAME': "Angular Essentials",
	        'API_URL': 'http://' + window.location.host + '/my/github/angular-essentials'
	    });

})();

