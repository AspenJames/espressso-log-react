import React, { Component } from 'react';

class EspressoForm extends Component {
  state = {
    espresso: {
      dose: '',
      yield: '',
      time: ''
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
        <form id='newEspresso' onSubmit={() => this.props.handleSubmit(this.state)} >
          <label></label>
        </form>
      </div>
    )
  }
}

export default EspressoForm;