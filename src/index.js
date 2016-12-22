import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './styles/core.scss';

// Web.Config that points to Default.html, manifest file to allow for method calls
require('file-loader?name=[name].config!./web.config');
require('file-loader?name=[name].manifest!./features.manifest');

ReactDOM.render(
    <App />,
	document.getElementById('app')
);