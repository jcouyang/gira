var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var paths = {
  scripts: ['src/**/*.js'],
	jsx: ['src/**/*.jsx']
};

var GM_location = '/Users/twer/Library/Application Support/Firefox/Profiles/d294ojk6.default/gm_scripts/gira_test-1';
gulp.task('reactify', function(){
	gulp.src(paths.jsx)
		.pipe(react({"harmony":true}))
	.pipe(gulp.dest('src'));
});

gulp.task('scripts', ['reactify'], function() {
  return gulp.src(paths.scripts)
		.pipe(browserify())
    .pipe(gulp.dest(GM_location));
});

gulp.task('watch', function() {
  gulp.watch("src/**/*.jsx", ['reactify', 'scripts']);
});
