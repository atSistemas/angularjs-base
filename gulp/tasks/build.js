'use strict';

module.exports = function(gulp, config) {

  gulp.task('build', ['browserify', 'sass', 'bower', 'css']);

};
