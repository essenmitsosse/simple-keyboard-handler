"use strict";

function getCheckerForCurrentEvent( key, ctrl, shift, event ) {
	return function ( checkShortCut ) {
		checkShortCut( key, ctrl, shift, event );
	};
}

module.exports = function ( shortcutList ) {
	return function ( event ) {
		var key = event.keyCode,
			ctrl = event.ctrlKey || false,
			shift = event.shiftKey || false;

		shortcutList.forEach( getCheckerForCurrentEvent( key, ctrl, shift, event ) );
	};
};
