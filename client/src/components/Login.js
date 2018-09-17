import React, {Component} from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <div>
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
    const payload = this.state
    event.preventDefault();
    console.log(this.state);
    fetch("api/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: payload
    }).then(resp => console.log("response: ", resp));
  }

}

export default Login;
