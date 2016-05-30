'use strict';

var rootPath = '.';
var appPath = './app/';
var distPath = './build';
var buildName = 'build.js';
var assetsPath = 'app.assets/';
var buildCssName = 'build.css';
var sourcePath = appPath+'app.module.js';
var bowerPath = 'bower_components/';
var bowerBuildName = 'bower.js';
var cssBuildName = 'styles.css';

module.exports = {

  server:{
    src: [rootPath, appPath],
    open: true,
    port: 8000,
    livereload: {
      filter: function(filePath, cb) {
        cb( !(/coverage/.test(filePath)) );
        cb( !(/bower_components/.test(filePath)) );
        cb( !(/build/.test(filePath)) );
        cb( !(/node_modules/.test(filePath)) );
      }
    },
    directoryListing: false
  },

  watch: {
    appPath : appPath
  },

  test: {
    e2ePath: 'test/e2e/test*.js',
    e2eConfig: 'test/protractor.config.js',
    specPath: 'test/unit/**/spec*.js',
    karma:{
      singleRun:true,
      autoWath:false
    },
    karmaTdd:{
      singleRun:false,
      autoWatch:true
    }
  },

  jshint: {
    appPath: appPath,
    reporter: 'default'
  },

  build: {
    distPath: distPath,
    bowerPath: bowerPath,
    buildName: buildName,
    sourcePath: sourcePath,
    bowerBuildName: bowerBuildName
  },
  css: {
    cssBuildName: cssBuildName,
    distPath: distPath
  },
  sass:{
    buildName: buildCssName,
    sourcePath: appPath+assetsPath+'scss/*.scss',
    distPath: distPath
  }
};
