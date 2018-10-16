const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');

gulp.task('lintChecker', () => gulp.src(['./*.js', './routes/*.js', './public/scripts/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('scssCompiler', () => gulp.src('./scss/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/stylesheets/')));

gulp.task('scss:watch', () => {
  gulp.watch('./scss/**/*.scss', ['scssCompiler']);
});

gulp.task('lint:watch', () => {
  gulp.watch('./public/scripts/*.js', ['lintChecker']);
  gulp.watch('./routes/*.js', ['lintChecker']);
  gulp.watch('./app.js', ['lintChecker']);
});

gulp.task('scss', ['scssCompiler', 'scss:watch']);
gulp.task('lint', ['lintChecker', 'lint:watch']);
gulp.task('default', ['scss', 'lint']);
