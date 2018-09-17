import React, {Component} from 'react';

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

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    document.getElementById('formErrors').innerText = null;
    const payload = this.state
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
        if (json.error === "not found") {
          document.getElementById('formErrors').innerText = "Email and/or password incorrect";
          this.setState({
            password: ''
          });
        } else {
          // add user to store
          this.setState({
            email: '',
            password: ''
          });
          //redirect
          console.log("success!");
          console.log(json);
        }
      });
  }

}

export default Login;
