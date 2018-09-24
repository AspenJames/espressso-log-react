import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { addCoffeeShop } from '../actions/coffeeShopActions';

class CoffeeShopForm extends Component {
  state = {
    name: '',
    address: ''
  };

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const history = this.props.history;
    const addCoffeeShop = this.props.addCoffeeShop;
    // prepare coffee shop data
    const data = {"coffee_shop": this.state}
    // send to API to persist
    fetch("/api/coffee_shops", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
      .then(json => {
        //add coffee shop to store 
        addCoffeeShop(json.coffee_shop);
        // redirect to show page for new shop
        history.push(`/coffee_shops/${json.coffee_shop.id}`)
      });
    this.setState({
      name: '',
      address: ''
    });
  }

  render() {
    return (
      <div className='formContainer'>
        <form id='newCoffeeShopForm' onSubmit={this.handleOnSubmit} >
          <label>Name: </label>
          <input type='text' id='name' 
            value={this.state.name} onChange={this.handleOnChange} /><br/>
          <label>Address: </label>
          <input type='text' id='address'
            value={this.state.address} onChange={this.handleOnChange} /><br/>
          <input type='submit' value='Enter Coffee Shop' />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCoffeeShop: coffeeShop => {
      dispatch(addCoffeeShop(coffeeShop))
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CoffeeShopForm));