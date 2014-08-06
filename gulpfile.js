var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var paths = {
  scripts: ['src/**/*.js'],
	jsx: ['src/**/*.jsx'],
	tests: ['__tests__/**/*.jsx']
};

var GM_location = '/Users/twer/Library/Application Support/Firefox/Profiles/d294ojk6.default/gm_scripts/gira_test-1';
gulp.task('reactify', function(){
	return gulp.src(paths.jsx)
		.pipe(react({"harmony":true}))
	.pipe(gulp.dest('src'));
});

gulp.task('scripts', ['reactify'], function() {
  return gulp.src(paths.scripts)
		.pipe(browserify())
    .pipe(gulp.dest(GM_location))
	  .pipe(gulp.dest("javascripts"));
});

gulp.task('tests', function(){
		return gulp.src(paths.tests)
		.pipe(react({"harmony":true}))
	.pipe(gulp.dest('__tests__'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsx, ['reactify', 'scripts']);
	  gulp.watch(paths.tests, ['tests']);
});

