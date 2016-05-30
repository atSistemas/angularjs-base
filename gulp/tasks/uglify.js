'use strict';

var uglify = require('gulp-uglify');

module.exports = function(gulp, config) {

  gulp.task('uglify', function() {
    return gulp.src(config.distPath+'/*.js')
      .pipe(uglify())
      .pipe(gulp.dest(config.distPath));
  });

};
