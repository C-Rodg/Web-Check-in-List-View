import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './styles/core.scss';

// Web.Config that points to Default.html
require('file-loader?name=[name].config!./web.config');

ReactDOM.render(
    <App />,
	document.getElementById('app')
);