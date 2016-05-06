/**
 * Created by seymour.h on 04/20/2016.
 */
var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tscConfig = require('./tsconfig.json');

var appSrc = 'Client/',
    tsSrc = 'development/ts/';

gulp.task('html', function() {
    gulp.src(appSrc + '**/*.html');
});

gulp.task('css', function() {
    gulp.src(appSrc + 'css/*.css');
});

gulp.task('copylibs', function() {
    return gulp
        .src([
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/@angular/**/*.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/**/*.js',
            'node_modules/@angular/bundles/http.dev.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/angular2-in-memory-web-api'
        ])
        .pipe(gulp.dest(appSrc + 'js/lib/@angular'));
});

gulp.task('typescript', function () {
    return gulp
        .src(tsSrc + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
    gulp.watch(tsSrc + '**/*.ts', ['typescript']);
    gulp.watch(appSrc + 'css/*.css', ['css']);
    gulp.watch(appSrc + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
    gulp.src(appSrc)
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
