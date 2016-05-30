'use strict';

module.exports = function(karma) {

  karma.set({
    basePath: './',
    frameworks: ['browserify','mocha','chai'],
    plugins : ['karma-browserify','karma-mocha','karma-chai','karma-phantomjs-launcher','karma-spec-reporter','karma-coverage'],
    files: [
    'app/**/*.js',
    'test/**/*.spec.js',
    ],
    exclude: ['node_modules','coverage'],
     preprocessors: {
      'app/**/*.js': [ 'browserify'],
      'test/**/*.spec.js': [ 'browserify']
    },
    browserify: {
      debug: true,
      extensions: ['.js'],
      transform: [ 'brfs','browserify-shim'],
       configure: function(bundle) {
         bundle.on('prebundle', function() {
           bundle.external('build/build.js');
         });
      }
    },
    reporters: ['spec','coverage'],
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true
    },
    port: 9876,
    colors: true,
    logLevel: karma.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
  });

};
