"use strict";

module.exports = function ( args, callback ) {
	var keyCode = args.keyCode,
		ctrl = args.ctrl || false,
		shift = args.shift || false,
		alt = args.alt || false;

	return function ( inputKeyCode, inputCtrl, inputShift, inputAlt, event ) {
		if ( keyCode === inputKeyCode && ctrl === inputCtrl && inputShift === shift ) {
			event.preventDefault();
			callback();
		}
	};
};
