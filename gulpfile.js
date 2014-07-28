var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var paths = {
  scripts: ['src/**/*.js']
};

gulp.task('reactify', function(){
	gulp.src("src/**.jsx")
		.pipe(react({"harmony":true}))
	.pipe(gulp.dest('src'));
});

gulp.task('scripts', ['reactify'], function() {
  return gulp.src(paths.scripts)
		.pipe(browserify())
      // .pipe(uglify())
      // .pipe(concat('gira.min.js'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('javascripts'));
});

gulp.task('watch', function() {
  gulp.watch("src/**/*.jsx", ['reactify', 'scripts']);
});
