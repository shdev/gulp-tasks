var gulp 		 = require('gulp')
var htmlv    = require('gulp-html-validator');
var plumber    = require('gulp-plumber');
var config   = require('../../../gulpconfig').validate.html;





// FIXME just a quickfix please fix me with putting this mfuntion to a separted file.
var swallowError = function(err) {
  gutil.log(err.toString());
  this.emit('end');
};

gulp.task('validate:html', function() {
  gulp.src(config.src)
  	.pipe(plumber())
  	.pipe(htmlv({format: config.format}))
    .pipe(gulp.dest(config.dest))
    .on('error', swallowError)
});