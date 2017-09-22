"use strict";

var chai = require( "chai" ),
	expect = chai.expect,
	sinonChai = require( "sinon-chai" ),
	sinon = require( "sinon" ),
	jsdom = require( "jsdom-global" ),
	keyPress = require( "./helpers/keyPress" );

chai.should();
chai.use( sinonChai );

describe( "Implementation test", function () {
	it( "addShortcut", function () {
		var simpleKeyboardHandler;

		global.cleanup = jsdom();

		simpleKeyboardHandler = require( "../simple-keyboard-handler" )

		this.callbackWithKey = sinon.spy();
		this.callbackWithKeyAndShift = sinon.spy();
		this.callbackWithKeyAndCtrl = sinon.spy();
		this.callbackWithKeyAndShiftAndCtrl = sinon.spy();

		simpleKeyboardHandler.addShortcut( {
			keyCode: 37
		}, this.callbackWithKey );

		keyPress( {
			keyCode: 37,
			ctrl: false,
			shift: false
		} );

		expect( this.callbackWithKey )
			.to.have.been.called;

		expect( this.callbackWithKeyAndCtrl )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndShift )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndShiftAndCtrl )
			.to.have.been.not.called;

		global.cleanup();
	} );
} );
