var gulp 		 = require('gulp')
var gutil    = require('gulp-util');
var htmlv    = require('gulp-html-validator');
var config   = require('../../../gulpconfig').validate.html;

sh_validateHtml = function() {
  return gulp.src(config.src)
    .pipe(htmlv({format: config.format}))
    .pipe(gulp.dest(config.dest))
    .pipe(gutil.buffer(function(err, files) {
      for (var i = files.length - 1; i >= 0; i--) {
          var s = files[i].contents.toString().trim();
          if (s.length > 0) {
            gutil.log(files[i].relative);
            console.log(s);
            console.log('');
          }
      };
    }))
  };

gulp.task('validate:html', sh_validateHtml);