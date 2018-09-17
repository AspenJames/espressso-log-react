import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

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
            <NavBar /> <br />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
