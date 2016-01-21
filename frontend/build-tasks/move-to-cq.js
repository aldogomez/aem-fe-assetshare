var gulp = require( 'gulp' );
var iron = require( 'iron-fe' );
var es   = require( 'event-stream' );

function moveToCq( ) {

    let librariesToCompile = iron.clientlibraries.get.all();

    var tasks = librariesToCompile.map(function(lib) {
        return gulp.src( lib.path + "/build/**/**", {
                base : lib.path + "/build"
            })
            .pipe(gulp.dest( "../" + lib.aemPath ))
			.on('end', function(){
                console.log( "		Moved: " + lib.name );
            	console.log( "		   To: " + lib.aemPath );
			});
    });

    // create a merged stream
    return es.merge.apply(null, tasks);

}

module.exports = moveToCq;