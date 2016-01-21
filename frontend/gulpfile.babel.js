import gulp from 'gulp';
import iron from 'iron-fe';

// build js
import browserify               from './build-tasks/browserify';
import watchBrowserify          from './build-tasks/watch-browserify';
// build sass
import sass                     from './build-tasks/sass';
import watchSass                from './build-tasks/watch-sass';
// move compiled css/js to aem clientlibs
import moveToCq                 from './build-tasks/move-to-cq';
import moveFontsToCq            from './build-tasks/fonts-to-cq';
// install bower components
import bower                    from './build-tasks/bower';
// prototype
import assemblePrototype        from './build-tasks/prototype-assemble';
import movePagelibsToPrototype  from './build-tasks/prototype-move-pagelibs';
import moveExtlibsToPrototype   from './build-tasks/prototype-move-extlibs';
import moveExtlibsCssToPrototype   from './build-tasks/prototype-move-extlibs-css';
import moveFontsToPrototype     from './build-tasks/fonts-to-prototype';
import prettifyHtml             from './build-tasks/prettify';
import watchDev                 from './build-tasks/watch-dev.js';

var runSequence = require('run-sequence');

/*
 * BUILD TASKS
 */
gulp.task( 'browserify', browserify );
gulp.task( 'sass', sass );
gulp.task( 'moveToCq', moveToCq );
gulp.task( 'moveFontsToCq', moveFontsToCq );
gulp.task( 'bower', bower );

/*
 * DEV TASKS
 */
gulp.task( 'watchBrowserify', watchBrowserify );
gulp.task( 'watchSass', watchSass );

/*
 * PROTOTYPE TASKS
 */
gulp.task( 'assemble', assemblePrototype );
gulp.task( 'movePageLibs', movePagelibsToPrototype );
gulp.task( 'moveExtLibs', moveExtlibsToPrototype );
gulp.task( 'moveExtLibsCss', moveExtlibsCssToPrototype );
gulp.task( 'moveFontsToPrototype', moveFontsToPrototype );
gulp.task( 'prettifyHtml', prettifyHtml );
gulp.task( 'watch', watchDev );

// prototype sequences
gulp.task( 'html', function(callback) {
    runSequence(
        'assemble',
        'prettifyHtml',
        callback
    );
});
gulp.task( 'css', function(callback) {
    runSequence(
        'sass',
        'movePageLibs',
        callback
    );
});
gulp.task( 'js', function(callback) {
    runSequence(
        'browserify',
        'movePageLibs',
        callback
    );
});
// prototype final sequence
gulp.task( 'prototype', function(callback) {
    runSequence(
        'html',
        'css',
        'js',
        'movePageLibs',
        'moveExtLibs',
        'moveExtLibsCss',
        'moveFontsToPrototype',
        callback
    );
});

gulp.task( 'install' , function(){
    iron.install();
});

// gulp default task: $ gulp
gulp.task('default', function(callback) {
    runSequence(
        'bower',
        'browserify',
        'sass',
        'moveToCq',
        'moveFontsToCq',
        callback
    );
});
