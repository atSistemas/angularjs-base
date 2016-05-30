'use strict';

var homeController = require('./home.controller');
var homeService = require('./services/home.service');

module.exports = angular.module('home-module',[])
  .controller('homeController', homeController)
  .factory('homeService', homeService);

homeController.$inject = ['homeService'];
homeService.$inject = ['$http','endpointLocatorService'];
