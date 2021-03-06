import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addUser } from '../actions/userActions';
import { addCoffeeShop } from '../actions/coffeeShopActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <div className='formContainer'>
        <div id='formErrors'></div>
        <form className='login' onSubmit={this.handleOnSubmit}>
          <label>Email: </label>
          <input type='text' id='email' value={this.state.email}
            onChange={this.handleOnChange} /><br />
          <label>Password: </label>
          <input type='password' id='password' value={this.state.password}
            onChange={this.handleOnChange} /><br />
          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = event => {
    if (document.getElementById('formErrors')) {
      document.getElementById('formErrors').remove();
    }
    const payload = {'user': this.state};
    const addUser = this.props.addUser;
    const addCoffeeShop = this.props.addCoffeeShop;
    event.preventDefault();
    fetch("api/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(resp => resp.json())
      .then(json => {
        if (json.errors) {
          // append error message data if present 
          let errorDiv = document.createElement('div');
          let formContainer = document.getElementsByClassName('formContainer')[0];
          let form = document.getElementsByTagName('form')[0];
          errorDiv.id = 'formErrors';
          errorDiv.innerText = json.errors
          formContainer.insertBefore(errorDiv, form);
          // clear password field
          this.setState({
            password: ''
          });
        } else {
          // add user to store
          addUser(json.user);
          // add user's coffee shops to store
          json.user.coffee_shops.forEach(shop => {
            addCoffeeShop(shop)
          });
          // reset fields
          this.setState({
            email: '',
            password: ''
          });
          // redirect to root
          this.props.history.push('/');
        }
      });
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => {
      dispatch(addUser(user))
    },
    addCoffeeShop: coffeeShop => {
      dispatch(addCoffeeShop(coffeeShop))
    } 
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
