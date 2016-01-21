/**
 *  This is the main file for pagelibs
 */

// App scripts

// Vendor Scripts
// var bootstrap = require ( '../../bower_components/bootstrap-sass' );
// var slick = require ( '../../bower_components/slick-carousel' );
// var widowFix = require ( '../vendor/widowFix/widowFix.js' );
// var matchHeight = require ( '../vendor/matchHeight/matchHeight.js' );

// Custom Scripts
var components = require( './pagelibs.components' );
var globalComponent = require( '../../components/global' );

globalComponent.init( components );
