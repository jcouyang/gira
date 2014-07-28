var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var paths = {
  scripts: ['src/**/*.jsx']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)

    // .pipe(sourcemaps.init())
		.pipe(browserify())
		.pipe(react())
      // .pipe(uglify())
      // .pipe(concat('gira.min.js'))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('javascripts'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});
