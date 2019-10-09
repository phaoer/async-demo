var gulp = require('gulp'),
  babelify = require('babelify'),
  notify = require('gulp-notify'),
  browserify = require('browserify'),
  // buffer = require('gulp-buffer'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  // source = require('vinyl-source-stream');
  source = require('vinyl-source-buffer');

gulp.task('default', function () {
    browserify(['./index.js','./indexs.js'])
    .transform("babelify", {plugins: ["transform-runtime"],presets: [["env"]]})
    .bundle()
    .pipe(source("index.js"))
    // .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    .pipe(notify({
        message: 'javascript compile complete'
    }));
});
// gulp.task('default', function () {
//   gulp.src('./index.js')
//       .pipe(babel())
//       .pipe(bro())
//       .pipe(gulp.dest('./dist'))
//       .pipe(notify({
//         message: 'javascript compile complete'
//       }));
// });