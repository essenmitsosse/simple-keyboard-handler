# Simple Keyboard Handler

[![Build Status](https://travis-ci.org/essenmitsosse/simple-keyboard-handler.svg)](https://travis-ci.org/essenmitsosse/simple-keyboard-handler) [![Coverage Status](https://coveralls.io/repos/github/essenmitsosse/simple-keyboard-handler/badge.svg)](https://coveralls.io/github/essenmitsosse/simple-keyboard-handler) [![Dependency Status](https://david-dm.org/essenmitsosse/simple-keyboard-handler.svg)](https://david-dm.org/essenmitsosse/simple-keyboard-handler)

A singleton module to catch keyboard events and then fire callbacks.

If you require this in your project it will automatically be initalized and add an eventListener.

# Usage

```javascript
var addKeyboardShortcut = require( "simple-keyboard-handler" );

// Maps SHIFT+K to the passed function
addKeyboardShortcut( {
    key: 75 // keycode for 'k'
    ctrl: false // defaults to false
    shift: true // defaults to false
}, function () {
    console.log( "This is my callback." );
} );
```

If you don't know a keycode, checkout [keycode.info](http://keycode.info/)
