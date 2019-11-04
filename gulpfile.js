var gulp = require('gulp');
var panini = require('panini');

gulp.task('default', ['build_htdocs']);

gulp.task('build_htdocs', function() {
  gulp.src('pages/**/*.html')
    .pipe(panini({
      root: 'pages/',
      layouts: 'layouts/',
      partials: 'partials/',
      helpers: 'helpers/',
      data: 'data/'
    }))
    .pipe(gulp.dest('htdocs'));
});
