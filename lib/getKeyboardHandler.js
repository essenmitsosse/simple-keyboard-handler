"use strict";

module.exports = function () {
	var shortcutList = [],
		getShortcutChecker = require( "./getShortcutChecker" ),
		getAddShortcutToList = require( "./getAddShortcutToList" );

	document.addEventListener( "keypress", getShortcutChecker( shortcutList ) );

	return getAddShortcutToList( shortcutList );
};
