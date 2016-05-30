'use strict';

var extensions = require('./extensions/');
var enviromentService = require('./services/enviroment.service');
var endpointLocatorService = require('./services/endpointLocator.service');

module.exports = angular.module('app-shared',[])
  .factory('extensions', extensions)
  .factory('enviromentService', enviromentService)
  .factory('endpointLocatorService', endpointLocatorService);

endpointLocatorService.$inject = ['enviromentService'];
