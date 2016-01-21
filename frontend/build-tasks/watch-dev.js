var gulp         = require( 'gulp' );
var runSequence = require('run-sequence');

function watchDev() {

    var cssToWatch = [
        "components/**/styles/**/**.scss",
        "client-libraries/**/styles/**/**.scss"
    ]

    var jsToWatch = [
        "components/**/**.js",
        "client-libraries/**/**.js"
    ];

    var htmlToWatch = [
        "prototype/src/**/**.hbs",
        "prototype/src/**/**.json",
        "components/**/**.hbs"
    ];

    gulp.watch( cssToWatch, ['css' ] );
    gulp.watch( jsToWatch, [ 'js' ] );
    gulp.watch( htmlToWatch, ['html' ] );

}


module.exports = watchDev;
