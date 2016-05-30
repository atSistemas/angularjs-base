'use strict';

var chai = require('chai');
var sinon = require('sinon');
var angular = require('angular');
var mocks = require('angular-mocks');
var chaiAsPromised = require("chai-as-promised");
var chaiShallow = require('chai-shallow-deep-equal')
chai.use(chaiAsPromised);
chai.use(chaiShallow);

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  this.sinon.restore();
});

module.exports = {
  mocks: mocks,
  sinon: sinon,
  angular: angular,
  expect: chai.expect,
  should: should,
  rootUrl: 'http://localhost:3000'
};
