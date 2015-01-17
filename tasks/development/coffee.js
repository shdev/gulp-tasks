var gulp 		 = require('gulp')
var coffee 		 = require('gulp-coffee');
var gutil 		 = require('gulp-util');
var concat 		 = require('gulp-concat');
var plumber 	 = require('gulp-plumber');
var config       = require('../../../gulpconfig').coffee;

gulp.task('coffee', function() {
  gulp.src(config.src)
  	.pipe(plumber())
  	.pipe(concat(config.joinedFile))
  	.pipe(gulp.dest(config.dest + '/'))
    .pipe(coffee(config.options))
    .pipe(gulp.dest(config.dest))
});