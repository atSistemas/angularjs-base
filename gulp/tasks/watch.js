'use strict';

module.exports = function(gulp, config) {

  gulp.task('watch', function () {
    gulp.watch(config.appPath+'**/*.js', ['browserify']);
    gulp.watch(config.appPath+'**/*.scss', ['sass']);
  });

};
