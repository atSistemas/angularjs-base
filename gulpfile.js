'use strict';

var gulp = require('gulp');
var config = require('./gulp/config');

require('./gulp/tasks/start')(gulp, config);
require('./gulp/tasks/server')(gulp, config.server);
require('./gulp/tasks/watch')(gulp, config.watch);
require('./gulp/tasks/test')(gulp, config.test);
require('./gulp/tasks/test-e2e')(gulp, config.test);
require('./gulp/tasks/test-all')(gulp, config.test);
require('./gulp/tasks/sass')(gulp, config.sass);
require('./gulp/tasks/build')(gulp, config.build);
require('./gulp/tasks/dist')(gulp, config.build);
require('./gulp/tasks/uglify')(gulp, config.build);
require('./gulp/tasks/css')(gulp, config.css);
require('./gulp/tasks/bower')(gulp, config.build);
require('./gulp/tasks/jshint')(gulp, config.watch);
require('./gulp/tasks/browserify')(gulp, config.build);
