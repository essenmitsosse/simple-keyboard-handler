"use strict";

var chai = require( "chai" ),
	expect = chai.expect,
	sinonChai = require( "sinon-chai" ),
	sinon = require( "sinon" ),
	jsdom = require( "jsdom-global" ),
	keyPress = require( "./helpers/keyPress" ),
	getKeyboardHandler = require( "../lib/getKeyboardHandler" );

chai.should();
chai.use( sinonChai );

beforeEach( function () {
	global.cleanup = jsdom();

	this.keyboardHandler = getKeyboardHandler();

	this.callbackWithKey = sinon.spy();
	this.callbackWithKeyAndShift = sinon.spy();
	this.callbackWithKeyAndCtrl = sinon.spy();
	this.callbackWithKeyAndShiftAndCtrl = sinon.spy();

	this.keyboardHandler( {
		keyCode: 37
	}, this.callbackWithKey );

	this.keyboardHandler( {
		keyCode: 37,
		shift: true
	}, this.callbackWithKeyAndShift );

	this.keyboardHandler( {
		keyCode: 37,
		ctrl: true
	}, this.callbackWithKeyAndCtrl );

	this.keyboardHandler( {
		keyCode: 37,
		shift: true,
		ctrl: true
	}, this.callbackWithKeyAndShiftAndCtrl );
} );

afterEach( function () {
	global.cleanup();
} );

describe( "Check if the passed functions get called when the key is pressed", function () {
	it( "Only key", function () {
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
	} );

	it( "Only key with shift", function () {
		keyPress( {
			keyCode: 37,
			ctrl: false,
			shift: true
		} );

		expect( this.callbackWithKey )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndCtrl )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndShift )
			.to.have.been.called;

		expect( this.callbackWithKeyAndShiftAndCtrl )
			.to.have.been.not.called;
	} );

	it( "Only key with ctrl", function () {
		keyPress( {
			keyCode: 37,
			ctrl: true,
			shift: false
		} );

		expect( this.callbackWithKey )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndCtrl )
			.to.have.been.called;

		expect( this.callbackWithKeyAndShift )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndShiftAndCtrl )
			.to.have.been.not.called;
	} );

	it( "Only key with shift and ctrl", function () {
		keyPress( {
			keyCode: 37,
			ctrl: true,
			shift: true
		} );

		expect( this.callbackWithKey )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndCtrl )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndShift )
			.to.have.been.not.called;

		expect( this.callbackWithKeyAndShiftAndCtrl )
			.to.have.been.called;
	} );
} );
