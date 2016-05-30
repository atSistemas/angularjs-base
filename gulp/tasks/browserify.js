'use strict';

var browserify = require('browserify');
var source     = require('vinyl-source-stream');

module.exports = function(gulp, config) {

  gulp.task('browserify', function() {
    return browserify({ entries: [config.sourcePath] })
      .bundle()
      .pipe(source(config.buildName))
      .pipe(gulp.dest(config.distPath));
  });

};
