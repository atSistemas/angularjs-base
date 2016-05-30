'use strict';

var server = require('gulp-server-livereload');

module.exports = function(gulp, config) {

  gulp.task('server', function() {
    gulp.src(config.src)
      .pipe(server({
        open: config.open,
        port: config.port,
        livereload: config.livereload,
        directoryListing: config.directoryListing
      }));
  });

};
