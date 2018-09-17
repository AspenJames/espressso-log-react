import React, { Component } from 'react';
import { connect } from 'react-redux';
import EspressoForm from '../components/EspressoForm';

class NewEspresso extends Component {
  render() {
    return (
      <EspressoForm handleSubmit={this.handleSubmit} />
    );
  };

  handleSubmit = (event, data) => {
    event.preventDefault();
    console.log(data);
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