var gulp = require('gulp');
var config = require('../../../gulpconfig').watch;

/**
 * Start build task and then watch files for changes
 */
gulp.task('watch:sync', ['browsersync'], function() {
	gulp.watch(config.sass, ['sass', 'manifest']);
	gulp.watch(config.files, ['copy:file', 'manifest']);
	gulp.watch(config.coffee, ['coffee', 'manifest']);
});
