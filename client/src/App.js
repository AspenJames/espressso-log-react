import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Espresso.Log</h1>
        </header> <br />
        <Router>
          <React.Fragment>
            <Route exact path='/login' component={Login} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
