'use strict';

var Server = require('../../node_modules/karma').Server;

module.exports = function(gulp, config) {

  var conf = (!!~process.argv.indexOf('--tdd')) ? config.karmaTdd : config.karma;

  gulp.task('test', function (done) {
    var server = new Server({
        configFile: process.cwd() + '/karma.conf.js',
        singleRun: conf.singleRun,
        autoWatch: conf.autoWatch
      },
      function(){
        done();
      });
      server.start();
    });

};
