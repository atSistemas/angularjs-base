'use strict';

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ignore = require('gulp-ignore');
var strip = require('gulp-strip-comments');

module.exports = function(gulp, config) {

  gulp.task('bower', function () {
    gulp.src([
      'bower_components/angular-translate/angular-translate.min.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-aria/angular-aria.min.js',
      'bower_components/angular-material/angular-material.min.js',
      ])
      .pipe(concat(config.bowerBuildName))
      .pipe(ignore.exclude([ '**/*.map']))
      .pipe(strip())
      //.pipe(uglify())
      .pipe(gulp.dest(config.distPath));
  });

};
