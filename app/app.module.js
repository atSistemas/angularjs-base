'use strict';

var angular = require('angular');
var router = require('angular-ui-router');
var appRun = require('./app.run');
var appRoutes = require('./app.routes');
var sharedModule = require('./app.shared');
var homeModule = require('./app.modules/home');
var translate = require('angular-translate');
var translations = require('./app.translations');
var fileTranslate = require('angular-translate-loader-static-files');

angular.module('angular-base-app',[
    router,
    translate,
    fileTranslate,
    homeModule.name,
    sharedModule.name,
])
.config(['$translateProvider', translations])
.config(['$stateProvider','$urlRouterProvider', appRoutes])
.run(['extensions', appRun]);
