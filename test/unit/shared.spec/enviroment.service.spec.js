'use strict';

describe('enviromentService', function(){

  var enviromentService;

  beforeEach(function (){

    angular.mock.module('app-shared');

    inject(function(_enviromentService_) {
      enviromentService = _enviromentService_;
    });

  });

  it('should return DEV as enviroment', function () {
    expect(enviromentService.getEnv()).to.equal('DEV');
  });

  it('should return true as development enviroment', function () {
    expect(enviromentService.isDev()).to.equal(true);
  });

  it('should return false as production enviroment', function () {
    expect(enviromentService.isProd()).to.equal(false);
  });

});
