import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path='/' component={App} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
