var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

gutil.log("Let's have it!");

gulp.task('default', function(){
  gulp.src('src/scss/*.scss')
    .on('data', function(chunk){
        console.log("horse");
       console.log(chunk.path);
    });

  return gulp.src('src/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css/'))
});

gulp.watch('src/scss/*.scss', ['default']);
