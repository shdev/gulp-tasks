var gulp        = require('gulp');
var preen 		= require('preen');
var plumber 	= require('gulp-plumber');

gulp.task('preen', function(cb) {
	try{
		preen.preen({}, cb);
	}catch(e){
		console.log(e);
	}
  	
});