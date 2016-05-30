'use strict';

var protractor = require('gulp-protractor').protractor;

module.exports = function(gulp, config) {
 
gulp.task('test-e2e', function (done) {
  gulp.src([config.e2ePath])
      .pipe(protractor({
        configFile: config.e2eConfig,
        args:['--baseUrl','http://localhost:8000']
      }))
    .on('end',done);
  });

};