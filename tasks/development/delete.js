var gulp   = require('gulp');
var del    = require('del');
var config = require('../../../gulpconfig').delete;

/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
  del(config.src, callback);
});