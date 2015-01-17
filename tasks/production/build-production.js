var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:prod', function(callback) {
  runSequence('build',
    'optimize',
    'manifest',
    // 'base64',
    callback);
});