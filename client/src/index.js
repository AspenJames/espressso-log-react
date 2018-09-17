import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path='/' component={App} />
      <Route path='/login' component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
