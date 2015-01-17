var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var git = require('gulp-git');
var rename = require('gulp-rename');
var config = require('../../../gulpconfig');
var dirs = config.dirs;


function archive(mark) {
	var d = new Date();
	var timestamp = d.toISOString()
					 .replace(/(-|:)/g, '')
					 .replace(/^(.{8,8}).(.{6,6}).*$/, '$1_$2');

	var gitBranch = '';
	git.revParse({args:'--abbrev-ref HEAD'}, function (err, branch) {

  		if (!err) {
	  		return gulp.src(dirs.dest.base + '/**/*')
			    .pipe(tar(config.name + '_' + branch + '_' + mark 
			    	+ timestamp  + '.tar'))
			    .pipe(gzip())
			    .pipe(gulp.dest(dirs.dest.archives));
  		} else {
			return gulp.src(dirs.dest.base + '/**/*')
			    .pipe(tar(config.name + '_' + mark +  
			    	timestamp + '.tar'))
			    .pipe(gzip())
			    .pipe(gulp.dest(dirs.dest.archives));
  		}
	});
}

gulp.task('archive', function() {
	return archive();
});

gulp.task('archive:dev', ['build'],  function() {
	return archive('dev_');
});

gulp.task('archive:prod', ['build:prod'],  function() {
	return archive('prod_');
});