'use strict';

var fs = require('fs');
var dir = process.cwd()+'/.angular-base/conf/logo.txt';
console.log(fs.readFileSync(dir, 'utf-8'));
