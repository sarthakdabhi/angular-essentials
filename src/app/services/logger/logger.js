(function () {
	'use strict';

	angular
		.module('services.logger')
		.service('Logger', Logger);

	Logger.$inject = ['$log'];

	function Logger($log) {

		this.error = function(msg) {
			$log.error(msg);
		}

		this.log = function(msg) {
			$log.log(msg);
		}

		this.info = function(msg) {
			$log.info(msg);
		}

		this.warn = function(msg) {
			$log.warn(msg);
		}

		this.debug = function(msg) {
			$log.debug(msg);
		}

	}

})();