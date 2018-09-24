import React, { Component } from 'react';
import { connect } from 'react-redux';
import EspressoForm from '../components/EspressoForm';

class NewEspresso extends Component {
  render() {
    return (
      <EspressoForm handleSubmit={this.handleSubmit} />
    );
  };

  handleSubmit = data => {
    console.log(data);
    //TODO: send data to store + api
  }
}

const mapStateToProps = state => {
  return {
    coffeeShops: state.coffeeShops,
    origins: state.origins,
    user: state.users
  }
}

export default connect(mapStateToProps)(NewEspresso);
