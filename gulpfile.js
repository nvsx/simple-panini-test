'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// // --- npm install -g gulp
// mkdir gulp001
// cd mygulp001
// npm init
// cat package.json
// touch gulpfile.js
// npm install gulp --save-dev
// npm install gulp-sass --save-dev
// npm install gulp-minify-css --save-dev
// npm install gulp-uglify --save-dev
// npm install gulp-concat --save-dev
// npm install gulp-typescript --save-dev
// touch src/myfile.ts
// npm install event-stream --save-dev
// npm install panini --save-dev

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');
var stream = require('event-stream');
var panini = require('panini');

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
//gulp.task('default', function(){
//	console.log("Hello World!")
// })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('default', [ 'styles', 'html', 'scripts' ]);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('styles', function() {
	return gulp
		.src('src/styles/main.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('dist'));
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('html', function() {
	return gulp
		.src('src/pages/index.html')
		.pipe(gulp.dest('dist'));
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('scripts', function() {
	return gulp
		.src('src/scripts/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('typescript', function(){
	return gulp
		.src('src/scripts/*.ts')
		.pipe(typescript())
		.pipe(gulp.dest('src/scripts/'));
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('all_scripts', ['typescript'], function(){
	// run extra task first
	return gulp
		.src('src/scripts/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('stream_scripts', function(){
	var jsFromTs = gulp
		.src('src/scripts/*.ts')
		.pipe(typescript());
	var js = gulp.src('src/scripts/*.js');
	// vars live completely in memory...
	// and we concat the streams...
	return stream.merge(jsFromTs, js)
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('watch', function(){
	gulp.watch('src/scripts/*.{js,ts}', ['stream_scripts']);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
gulp.task('panini', function() {
  gulp.src('pages/**/*.html')
    .pipe(panini({
      root: 'pages/'
      layouts: 'layouts/',
      partials: 'partials/',
      helpers: 'helpers/',
      data: 'data/'
    }))
    .pipe(gulp.dest('build'));
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// gulp.task('watch', function() {
//   // image changes
//   gulp.watch(folder.src + 'images/**/*', ['images']);
//   // html changes
//   gulp.watch(folder.src + 'html/**/*', ['html']);
//   // javascript changes
//   gulp.watch(folder.src + 'js/**/*', ['js']);
//   // css changes
//   gulp.watch(folder.src + 'scss/**/*', ['css']);
// });

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// EOF

