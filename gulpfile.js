'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
  ghpages = require('gulp-gh-pages'),
    csso = require('gulp-csso');

// var options = {
//   src: '',
//   dist: 'dist'
// };

/**
** Javascript tasks
**/

// concatena los js en un build.js
gulp.task('concatJs', function() {
  return gulp.src([
      'js/main.js',
      'js/other.js'])
      .pipe(maps.init())
      .pipe(concat('build.js'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('js'));
});

// compress build.js
gulp.task('compressJs', ['concatJs'], function() {
  return gulp.src('js/build.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});



/**
** CSS tasks
**/

// compila sass
gulp.task('compileSass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(maps.init())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});
// minify css
gulp.task('miniCss', function() {
    return gulp.src('css/main.css')
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watchFiles', function() {
  gulp.watch('scss/**/*.scss', ['compileSass']);
});


/**
** IMG tasks
**/

gulp.task('img', function(){
  return gulp.src('img/**/*', {base: './'})
  .pipe(gulp.dest('dist'));
});


/**
** Deploy to gh-Pages
**/

gulp.task('deploy', function() {
  return gulp.src('dist/*')
    .pipe(ghpages());
});

// clean
gulp.task('clean', function() {
  console.log('tarea limpiar');
});


// build
gulp.task('build', [
  'compressJs',
  'compileSass',
  'miniCss'
]);


// default
// gulp.task('default', ['clean','concatJs'], function(){
//   gulp.start('build');
// });
