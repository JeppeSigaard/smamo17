'use strict';

// Requires
let React = require( 'react' ),
    ReactDOM = require( 'react-dom' ),

    // Modules
    Global = require('./modules/global/global.js'),
    _ = require('./modules/underscore/underscore_main.js'),
    DataHandler = require('./handlers/datahandlers/dataHandler.js'),

    // Pages
    HomePage = require( './pages/home.js' );

// Styling
require( '../style/style.scss' );

Global.api = new DataHandler;

// Main Entry Point
let root = document.getElementById( 'page-wrapper' );
ReactDOM.render( <HomePage />, root );
