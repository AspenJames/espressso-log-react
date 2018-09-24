import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Signup from './components/Signup';
import NewEspresso from './containers/NewEspresso';
import CoffeeShops from './containers/CoffeeShops';
import CoffeeShop from './containers/CoffeeShop';

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
            <NavBar resetStore={this.props.resetStore} user={this.props.user} /> <br />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/coffee_shops' component={CoffeeShops} />
            <Route exact path='/espressos/new' component={NewEspresso} />
            <Route exact path='/coffee_shops/:id' component={CoffeeShop} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    resetStore: () => {
      dispatch({type: "@@RESET"})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
