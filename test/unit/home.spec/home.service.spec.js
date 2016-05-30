'use strict';

var helper = require('../../test-helper');
var sinon = helper.sinon;
var expect = helper.expect;
var angular = helper.angular;

describe('homeService', function(){

  var $httpBackend, homeService;

  beforeEach(function (){

    angular.mock.module('home-module');
    angular.mock.module('app-shared');

    inject(function(_$httpBackend_, _homeService_) {
      homeService = _homeService_;
      $httpBackend = _$httpBackend_;
    });

  });

  it('getData should request /mocks/home.json', function (done) {
    $httpBackend.expectGET('/mocks/home.json').respond({});
    homeService.getData().then(function(data) {
      done();
    });

    $httpBackend.flush();

  });

});
