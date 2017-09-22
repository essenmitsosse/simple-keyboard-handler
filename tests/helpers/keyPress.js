"use strict";

module.exports = function ( args ) {
	var event = document.createEvent( "Event" );
	event.keyCode = args.keyCode;
	if ( args.ctrl === true ) {
		event.ctrlKey = true;
	}
	if ( args.shift === true ) {
		event.shiftKey = true;
	}
	event.initEvent( "keyup" );
	document.dispatchEvent( event );
};
