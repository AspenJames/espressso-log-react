import React, { Component } from 'react';

import EspressoForm from '../components/EspressoForm';

class CoffeeShop extends Component {
  state = {
    coffeeShop: {
      id: null,
      name: null,
      address: null
    },
    espressos: [],
    pendingUsers: []
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`/api/coffee_shops/${id}`)
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        // add shop to internal state
        const coffeeShop = json.coffee_shop;
        this.setState({
          coffeeShop: {
            id: coffeeShop.id,
            name: coffeeShop.name,
            address: coffeeShop.address
          },
          espressos: coffeeShop.espressos,
          pendingUsers: coffeeShop.users_pending_approval
        });
      });
  }

  render() {
    debugger;
    return (
      <div />
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.users.user
  });
}

export default connect(mapStateToProps)(CoffeeShop);