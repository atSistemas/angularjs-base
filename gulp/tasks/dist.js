'use strict';

module.exports = function(gulp, config) {

  gulp.task('dist', [ 'browserify' ], function(done) {
      gulp.start('sass','css','bower','uglify', function() {
        done();
    });
  })

};
