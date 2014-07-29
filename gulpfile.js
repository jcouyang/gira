var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var paths = {
  scripts: ['src/gira.js'],
	jsx: ['src/**/*.jsx']
};

gulp.task('reactify', function(){
	gulp.src(paths.jsx)
		.pipe(react({"harmony":true}))
	.pipe(gulp.dest('src'));
});

gulp.task('scripts', ['reactify'], function() {
  return gulp.src(paths.scripts)
		.pipe(browserify())
    .pipe(gulp.dest('javascripts'));
});

gulp.task('watch', function() {
  gulp.watch("src/**/*.jsx", ['reactify', 'scripts']);
});
