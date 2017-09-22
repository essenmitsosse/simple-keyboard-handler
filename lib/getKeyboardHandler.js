"use strict";

module.exports = function () {
	var shortcutList = [],
		getShortcutChecker = require( "./getShortcutChecker" ),
		getAddShortcutToList = require( "./getAddShortcutToList" );

	document.addEventListener( "keyup", getShortcutChecker( shortcutList ) );

	return getAddShortcutToList( shortcutList );
};
