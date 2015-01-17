var gulp        = require('gulp');
var changed     = require('gulp-changed');
var tap     	= require('gulp-tap');
var config      = require('../../../gulpconfig').copyFiles;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('copy:file', function() {

  for (var i = config.length - 1; i >= 0; i--) {
  	retval = gulp.src(config[i].src)
    .pipe(changed(config[i].dest)) // Ignore unchanged files
    .pipe(tap(function (file,t) {
            console.log("Copy file" + file.path);
            // Do something with the file name
        }))
    .pipe(gulp.dest(config[i].dest));
  };

 
});