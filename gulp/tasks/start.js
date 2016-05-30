'use strict';

module.exports = function(gulp, config) {

  if(!!~process.argv.indexOf('--tdd')){
    gulp.task('start', ['build', 'test', 'watch', 'server']);
  }
  else{
    gulp.task('start', ['build', 'watch', 'server']);
  }

};
