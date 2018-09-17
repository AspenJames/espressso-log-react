import React, { Component } from 'react';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  render() {
    return (
      <div className='formContainer'>
        <div id='formErrors'></div>
        <form className='singup' onSubmit={this.handleOnSubmit}>
          <label>Name: </label>
          <input type='text' id='name' value={this.state.name}
            onChange={this.handleOnChange} /><br />
          <label>Email: </label>
          <input type='text' id='email' value={this.state.email}
            onChange={this.handleOnChange} /><br />
          <label>Password: </label>
          <input type='password' id='password' value={this.state.password}
            onChange={this.handleOnChange} /><br />
          <input type='submit' value='Sign Up' />
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
    document.getElementById('formErrors').innerText = null;
    const payload = {'user': this.state};
    event.preventDefault();
    fetch("api/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(resp => resp.json())
      .then(json => {
        if (json.errors) {
          document.getElementById('formErrors').innerText = json.errors;
          this.setState({
            password: ''
          });
        } else {
          // add user to state 
          console.log(json);
          this.setState({
            name: '',
            email: '',
            password: ''
          });
          //redirect somewhere
        }
      });
  }

}

export default Signup;