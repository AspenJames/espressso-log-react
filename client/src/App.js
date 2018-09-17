import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Signup from './components/Signup';
import NewEspresso from './containers/NewEspresso';

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
            <NavBar handleLogout={this.handleLogout} user={this.props.user} /> <br />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/coffee_shops' component={CoffeeShops} />
            <Route exact path='/espressos/new' component={NewEspresso} />
          </React.Fragment>
        </Router>
      </div>
    );
  }

  handleLogout = event => {
    const user = {user: this.props.user}
    event.preventDefault();
    // sign out on server side
    fetch("api/logout", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(resp => resp.json())
      .then(json => console.log(json));
    // reset store
    this.props.resetUser();
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    resetUser: () => {
      dispatch({type: "RESET_USER"})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
