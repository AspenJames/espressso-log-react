import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CoffeeShopForm from '../components/CoffeeShopForm';

class CoffeeShops extends Component {
  render() {
    return (
      <div className='coffeeShopsContainer'>
        <h2>Select a cafe: </h2>
        <ul>
          {this.renderCoffeeShops()}
        </ul>
        <h3>Or, enter a new coffee shop: </h3>
        <CoffeeShopForm />
      </div>
    );
  };

  renderCoffeeShops = () => {
    return this.props.coffeeShops.map(shop => {
      return (
        <NavLink key={shop.id} to={"/coffee_shops/" + shop.id} exact >{shop.name}</NavLink>
      )
    })
  }
}

const mapStateToProps = state => {
  return {
    coffeeShops: state.coffeeShops.coffeeShops
  };
}

export default connect(mapStateToProps)(CoffeeShops);