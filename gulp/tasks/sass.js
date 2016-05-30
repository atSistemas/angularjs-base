'use strict';

var sass = require('gulp-sass');
var concat = require('gulp-concat');

module.exports = function(gulp, config) {
  gulp.task('sass', function () {
    gulp.src(config.sourcePath)
      .pipe(sass({errLogToConsole: true}))
      .pipe(concat(config.buildName))
      .pipe(gulp.dest(config.distPath));
  });

};
