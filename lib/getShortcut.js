"use strict";

module.exports = function ( args, callback ) {
	var key = args.key,
		ctrl = args.ctrl || false,
		shift = args.shift || false;

	return function ( inputKey, inputCtrl, inputShift, event ) {
		if ( key === inputKey && ctrl === inputCtrl && inputShift === shift ) {
			event.preventDefault();
			callback();
		}
	};
};
