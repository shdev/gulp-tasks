var gulp        = require('gulp');
var changed     = require('gulp-changed');
var rename     	= require('gulp-rename');
var tap     	= require('gulp-tap');
var config      = require('../../../gulpconfig').copyBower;

/**
 * Copy images to build folder
 * if not changed
 */

defaultRenameFunc = function (path) {
        path.dirname = "";
    };

gulp.task('copy:bower', ['preen'], function() {

  for (var i = config.length - 1; i >= 0; i--) {

  	if('renameFunc' in config[i]) {
  		renameFunc = config[i].renameFunc;
  	} else{
  		renameFunc = defaultRenameFunc
  	}

  	retval = gulp.src(config[i].src)
  	.pipe(rename(renameFunc))
    .pipe(changed(config[i].dest)) // Ignore unchanged files
    .pipe(tap(function (file,t) {
            console.log("Copy file" + file.path);
          
        }))
    .pipe(gulp.dest(config[i].dest));
  };

 
});