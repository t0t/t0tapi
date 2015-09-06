'use strict';

var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
  ghPages = require('gulp-gh-pages'),
      csso = require('gulp-csso'),
minifyHTML = require('gulp-minify-html');


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
gulp.task('compileSass', ['miniCss'], function() {
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


/**
** IMG tasks
**/

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
});


/**
** IMG tasks
**/

gulp.task('img', function(){
  return gulp.src('img/**/*', {base: './'})
  .pipe(gulp.dest('dist'));
});


// browser-sync
gulp.task('browser-sync', function(){
  browserSync.init(['./css/main.css','./js/build.js'], {
    server: {
      baseDir: './'
    }
  });
});




/**
** THE TASKS
**/

// > gulp deploy
gulp.task('deploy', [
  'compressJs',
  'compileSass',
  'minify-html'
], function() {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});

// > gulp build
gulp.task('build', [
  'compressJs',
  'compileSass',
  'minify-html'
]);

// > gulp watch
gulp.task('watch',['browser-sync'], function(){
  gulp.watch(['./scss/*.scss'],['compileSass']);
});
