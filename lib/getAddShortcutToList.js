"use strict";

module.exports = function ( shortcutList ) {
	var getShortcut = require( "./getShortcut" );

	return function ( args, callback ) {
		shortcutList.push( getShortcut( args, callback ) );
	};
};
