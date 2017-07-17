var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var concat  = require('gulp-concat');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var entries = './src/index.jsx';

gulp.task('browserSync' , function() {
  browserSync({
    proxy:'127.0.0.1',
    port: 80,
    open: true,
  });
});

gulp.task('buildJS' ,  function () {
    return browserify({
            entries: entries,
            extensions: ['.jsx'],
            debug: false
        })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('index.js'))
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));
});
 
gulp.task('watchJS', ['buildJS'], function(){
    gulp.watch('./src/**/*.jsx', ['buildJS']);
});



gulp.task('buildCSS' ,  function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));

});

gulp.task('watchCSS', ['buildCSS'], function(){
    gulp.watch('./src/**/*.scss', ['buildCSS']);
});
 
gulp.task('default', ['browserSync','watchJS', 'watchCSS']);
gulp.task('build', ['buildCSS', 'buildJS' ]);