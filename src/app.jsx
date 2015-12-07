var React = require('react');
var ReactDOM = require('react-dom');

/* load in components */
var Routes = require('./routes');
//var Api = require('./utils/api');

/* create React app, load ing Routes component and attach to .container class */
ReactDOM.render(Routes, document.querySelector('.container'));
