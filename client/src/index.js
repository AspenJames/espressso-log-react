import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(thunk));

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route path='/' component={App} />
        <Route path='/login' component={Login} />
      </React.Fragment>
    </Router>
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();
