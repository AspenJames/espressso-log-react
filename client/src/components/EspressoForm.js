import React, { Component } from 'react';

class EspressoForm extends Component {
  state = {
    espresso: {
      dose: '',
      yield: '',
      time: '',
      notes: ''
    },
    coffeeShop: {
      id: '',
      name: '',
      address: ''
    },
    origin: {
      id: '',
      name: ''
    }
  }

  render() {
    return (
      <div className='formContainer'>
        <form id='newEspresso' onSubmit={this.handleOnSubmit} >
          <label>Dose weight: </label><br />
          <input type='number' id='dose' value={this.state.espresso.dose}
                 onChange={this.handleOnChange} /><br />
          <label>Yield weight: </label>
          <input type='number' id='yield' value={this.state.espresso.yield}
                 onChange={this.handleOnChange} /><br />
          <label>Time: </label>
          <input type='number' id='time' value={this.state.espresso.time}
                 onChange={this.handleOnChange} /><br />
          <label>Notes: </label>
          <input type='text' id='notes' value={this.state.espresso.notes}
                 onChange={this.handleOnChange} /><br />
          <input type='submit' value='Submit Espresso Recipe' />
        </form>
      </div>
    )
  }

  handleOnChange = event => {
    this.setState({
      espresso: {...this.state.espresso,
        [event.target.id]: event.target.value
      }
    });
  }

  handleOnSubmit = event => {
    // prevent refresh
    event.preventDefault();
    // pass state to submit function of parent
    this.props.handleSubmit(this.state);
    // reset espresso state data
    this.setState({
      espresso: {
        dose: '',
        yield: '',
        time: '',
        notes: ''
      }
    });
  }
}

export default EspressoForm;
