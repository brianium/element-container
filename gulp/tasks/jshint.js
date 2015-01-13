'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    config = require('../config'),
    stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src([config.src.root + '/*.js', config.src.root + '/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});
