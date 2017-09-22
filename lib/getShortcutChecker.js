"use strict";

function getCheckerForCurrentEvent( keyCode, ctrl, shift, alt, event ) {
	return function ( checkShortCut ) {
		checkShortCut( keyCode, ctrl, shift, alt, event );
	};
}

module.exports = function ( shortcutList ) {
	return function ( event ) {
		var keyCode = event.keyCode,
			ctrl = event.ctrlKey || false,
			shift = event.shiftKey || false,
			alt = event.altKey || false;

		shortcutList.forEach( getCheckerForCurrentEvent( keyCode, ctrl, shift, alt, event ) );
	};
};
