'use strict';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function(gulp, config) {

  gulp.task('lint', function() {
    return gulp.src(config.appPath+'**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
  });

};
