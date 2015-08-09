var gulp   = require('gulp');
var batch  = require('gulp-batch');
var gutil  = require('gulp-util');
var config = require('../../../gulpconfig').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['build'], function() {
	gulp.watch(config.sass, ['sass', 'manifest']);
	gulp.watch(config.files, ['copy:file', 'manifest']);
	gulp.watch(config.bower, ['copy:bower','manifest']);
	gulp.watch(config.coffee, ['coffee', 'manifest']);
	gulp.watch(config.html.pattern, batch({debounce: config.html.debounce}, function(events) {
		gutil.log('Validate HTML:');
    	return sh_validateHtml();
	}));
});
