'use strict';

var helper = require('../../test-helper');
var sinon = helper.sinon;
var expect = helper.expect;
var angular = helper.angular;

describe('Home Controller', function(){

  var expectedResult = require('../../../mocks/home.json');
  var scope, httpBackend, homeController, homeService, endpointLocatorService;

  beforeEach(function (){

    angular.mock.module('home-module');
    angular.mock.module('app-shared');

    inject(function ($rootScope, $controller, _$httpBackend_, _homeService_) {
      scope = $rootScope.$new();
      homeService = _homeService_;
      httpBackend = _$httpBackend_;
      homeController = $controller('homeController',{ $scope: scope });
    });

  });

  it('should have context defined', function () {
    expect(homeController.context).to.exits;
  });

  it('should have a init has been called', function () {
    expect(homeController.init).to.exits;
  });

});
