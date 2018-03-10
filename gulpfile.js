var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
// const reload = browserSync.reload;

gulp.task('copyHTML',function(){
      gulp.src('app/*.html')
          .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
      return gulp.src('app/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    });

gulp.task('minify', function(){
      gulp.src('app/scripts/*.js')
            .pipe(minify())
            .pipe(gulp.dest('dist/script'));
});

gulp.task('watch', function(){
      gulp.watch('app/scss/*.scss', ['sass']);
      gulp.watch('app/*.html', ['copyHTML']);
      gulp.watch('app/scripts/main.js', ['minify']);
});

gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: "./dist"
          }
      });
  });

gulp.task('default', ['browser-sync', 'watch', 'sass', 'copyHTML', 'minify']);