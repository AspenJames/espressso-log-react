import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import CoffeeShopForm from '../components/CoffeeShopForm';

class CoffeeShops extends Component {
 
  render() {
    
    return (
      <div className='coffeeShopsContainer'>
        <h2>Select a cafe:</h2>
        <ul>
          {this.renderCoffeeShops()}
        </ul>
        <h3>Or, enter a new coffee shop:</h3>
        <CoffeeShopForm />
      </div>
    );
  };
  
  renderCoffeeShops = () => {
    const options = this.props.coffeeShops.map(shop => {
      return (
        {value: shop.id, label: shop.name}
      );
    });

    return (
      <Select 
        onChange={this.handleChange}
        options={options} />
    )
  };

  handleChange = (selectedOption) => {
    // redirect to show page for selected shop
    this.props.history.push(`/coffee_shops/${selectedOption.value}`);
  }
}

const mapStateToProps = state => {
  return {
    coffeeShops: state.coffeeShops.coffeeShops
  };
}

export default connect(mapStateToProps)(CoffeeShops);