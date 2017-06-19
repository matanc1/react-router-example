import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {browserHistory} from 'react-router';

import Routes from './Router/Routes';

ReactDOM.render(<Routes     history={browserHistory}/>, document.getElementById('root'));
registerServiceWorker();
