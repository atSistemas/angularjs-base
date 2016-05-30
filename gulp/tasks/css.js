'use strict';

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var strip = require('gulp-strip-comments');
var ignore = require('gulp-ignore');

module.exports = function(gulp, config) {

  gulp.task('css', function () {
    gulp.src([
      'app.assets/css/*.css',
      ])
      .pipe(concat(config.cssBuildName))
      .pipe(strip())
      .pipe(gulp.dest(config.distPath));
  });

};
