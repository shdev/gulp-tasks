var gulp 		 = require('gulp')
var coffee 		 = require('gulp-coffee');
var gutil 		 = require('gulp-util');
var concat 		 = require('gulp-concat');
var plumber 	 = require('gulp-plumber');
var config       = require('../../../gulpconfig').coffee;



// FIXME just a quickfix please fix me with putting this mfuntion to a separted file.
var swallowError = function(err) {
  gutil.log(err.toString());
  this.emit('end');
};

gulp.task('coffee', function() {
  gulp.src(config.src)
  	.pipe(plumber())
  	.pipe(concat(config.joinedFile))
  	.pipe(gulp.dest(config.dest + '/'))
    .pipe(coffee(config.options))
    .on('error', swallowError)
    .pipe(gulp.dest(config.dest))
    .on('error', swallowError)
});