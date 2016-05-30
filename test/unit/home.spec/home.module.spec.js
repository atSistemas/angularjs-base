'use strict';

var helper = require('../../test-helper');
var sinon = helper.sinon;
var expect = helper.expect;
var angular = helper.angular;

describe('Home Module', function(){

  var homeController, endpointLocatorService;

  beforeEach(function (){

    angular.mock.module('angular-base-app');

    inject(function($controller,_endpointLocatorService_){
      homeController = $controller('homeController');
      endpointLocatorService = _endpointLocatorService_;
    });

  });

  it('sould have a controller', function () {
    expect(homeController).to.exits;
  });

});
