'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    config = require('../config');

gulp.task('browserify', function() {
  return browserify('./index.js')
    .bundle()
    .pipe(source('board.js'))
    .pipe(buffer())
    .pipe(gulp.dest(config.dist.root))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.root));
});
