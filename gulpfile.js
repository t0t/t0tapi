'use strict';

var gulp      = require('gulp'),
  browserSync = require('browser-sync').create(),
  concat      = require('gulp-concat'),
  uglify      = require('gulp-uglify'),
  sass        = require('gulp-sass'),
  maps        = require('gulp-sourcemaps'),
  ghPages     = require('gulp-gh-pages'),
  csso        = require('gulp-csso'),
  minifyHTML  = require('gulp-minify-html'),
  del         = require('del'),
  jade        = require('gulp-jade'),
  babel       = require('gulp-babel');


// concat Js
gulp.task('concatJs', function() {
  return gulp.src(['./js/src/*.js'])
    .pipe(babel())
    .pipe(maps.init())
    .pipe(concat('build.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

// compile Sass
gulp.task('compileSass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(maps.init())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

// compile Jade
gulp.task('compileJade', function() {
  return gulp.src(['./jade/*.jade','!./jade/_*.jade'])
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('./'));
});

//compile sass and jade
gulp.task('compileSassJade',['compileSass','compileJade'])

// ----- package

// minify Css
gulp.task('minifyCss', function() {
  return gulp.src('css/main.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

// minify Html
gulp.task('minifyHtml', function() {
  return gulp.src('*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist'));
});

// compress Js
gulp.task('compressJs', function() {
  return gulp.src('js/build.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// place Imgs and icons
gulp.task('img', function(){
  return gulp.src(['img/**/*','*.ico'], {base: './'})
    .pipe(gulp.dest('dist'));
});

// delete generated files
gulp.task('clean', function(){
  del(['dist/**/*.*','css/*.css','css/*.css*','./*.html','js/build.js','js/build.js*']);
});

// > gulp watch
gulp.task('watch', function(){
  gulp.watch(['scss/*.scss','scss/**/*.scss'],['compileSass']);
  gulp.watch(['./js/build.js','./js/src/**/*'],['concatJs']);
  gulp.watch(['jade/*.jade','jade/**/*.jade'],['compileJade']);
});




// transcompile to ES6
// gulp.task('default', function () {
// 	return gulp.src('src/app.js')
//
// });

// dev
gulp.task('dev', ['watch'], function(){
  browserSync.init(['./css/main.css','./js/build.js','./*.html'], {
    server: { baseDir: './' }
  });
});

// build
gulp.task('build', ['compileSassJade','concatJs']);

// package
gulp.task('package', ['compressJs','minifyCss','img','minifyHtml']);

// deploy
gulp.task('deploy', ['compressJs','minifyCss','minifyHtml','img'], function() {
  return gulp.src('dist/**/*')
  .pipe(ghPages());
});




// gulp
gulp.task('default', ['clean'], function(){
  gulp.start('build');
});
