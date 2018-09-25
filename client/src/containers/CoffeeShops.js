import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';


import { addCoffeeShop } from '../actions/coffeeShopActions';
import CoffeeShopForm from '../components/CoffeeShopForm';

class CoffeeShops extends Component {

  state = {
    shopsPendingRequests: [],
  }

  componentDidMount() {
    const coffeeShopIds = this.props.coffeeShops.map(shop => shop.id);
    fetch(`/api/coffee_shops`)
      .then(resp => resp.json())
      .then(json => {
        const shopsPendingRequests = json.coffee_shops.filter(shop => !coffeeShopIds.includes(shop.id));
        this.setState({ shopsPendingRequests })
      });
  }
 
  render() {
    
    return (
      <div className='coffeeShopsContainer'>
        <h2>Your Coffee Shops:</h2>
          {this.renderCoffeeShops()}
        <h3>Request access:</h3>
          {this.renderExistingCoffeeShops()}
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
    );
  }

  handleChange = (selectedOption) => {
    // redirect to show page for selected shop
    this.props.history.push(`/coffee_shops/${selectedOption.value}`);
  }

  renderExistingCoffeeShops = () => {
    const options = this.state.shopsPendingRequests.map(shop => {
      return (
        {value: shop, label: shop.name}
      );
    });

    return (
      <Select 
        onChange={this.handleSelect}
        options={options} />
    );
  }

  handleSelect = (selectedOption) => {
    // send data to api to request access 
    const user_id = this.props.user.id;
    const coffee_shop_id = selectedOption.value.id
    const data = {user_id, coffee_shop_id}
    const addCoffeeShop = this.props.addCoffeeShop;
    const history = this.props.history
    fetch('/api/coffee_shop_users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
      .then(json => {
        console.log("resp: ", json);
        // prepare data to add to store
        const coffee_shop = json.coffee_shop
        addCoffeeShop(coffee_shop);
        // redirect to show page
        history.push(`/coffee_shops/${coffee_shop.id}`);
      });
  }
}

const mapStateToProps = state => {
  return {
    coffeeShops: state.coffeeShops.coffeeShops,
    user: state.users.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addCoffeeShop: coffeeShop => {
      dispatch(addCoffeeShop(coffeeShop))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoffeeShops));