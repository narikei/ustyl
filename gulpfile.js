const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('default', ['css']);

gulp.task('css', () => {
  gulp.src([
    './src/*',
  ])
  .pipe(stylus())
  .pipe(concat('ustyl.css'))
  .pipe(gulp.dest('./'))
  .pipe(concat('ustyl.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./'));
});
