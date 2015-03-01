var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
//var browsersync  = require('browser-sync');
var gulpFilter   = require('gulp-filter');
var minifycss    = require('gulp-minify-css');
var size         = require('gulp-size');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../../gulpconfig').sass;
var compass      = require('gulp-compass');
var gutil 		 = require('gulp-util');
//var reload       = browsersync.reload;

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */

// gulp.task('sass', function () {
//   return gulp.src(config.dirs.src.sass + '/**/*.scss')
//     .pipe(plumber({
//       errorHandler: function (error) {
//         console.log(error.message);
//         this.emit('end');
//     }}))
//     .pipe(compass(config.compass))
//     .pipe(gulp.dest(config.dirs.dest.css));
// });


// FIXME just a quickfix please fix me with putting this mfuntion to a separted file.

var swallowError = function(err) {
  gutil.log(err.toString());
  this.emit('end');
};

gulp.task('sass', function(cb) {
  var sassConfig = config.options;

  //sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map']);

  // browsersync.notify('Compiling Sass');

  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(compass(config.compassOptions))
    .on('error', swallowError)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixerOptions))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(minifycss(config.minifyOptions))
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.dest))
    .on('error', swallowError)
     
    //.pipe(size())
   // .pipe(reload({stream:true}));

});