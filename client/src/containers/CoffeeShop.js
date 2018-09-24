import React, { Component } from 'react';
import { connect } from 'react-redux';

import EspressoForm from '../components/EspressoForm';

class CoffeeShop extends Component {
  state = {
    coffeeShop: {
      id: null,
      name: null,
      address: null,
      admin: null
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
        debugger;
        const admin = (this.props.user.id === coffeeShop.admin[0].id) ? true : false
        this.setState({
          coffeeShop: {
            id: coffeeShop.id,
            name: coffeeShop.name,
            address: coffeeShop.address,
            admin: admin
          },
          espressos: coffeeShop.espressos,
          pendingUsers: coffeeShop.users_pending_approval
        });
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.coffeeShop.name}</h2>
        {this.state.coffeeShop.admin && <div>Admin</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.users.user
  });
}

export default connect(mapStateToProps)(CoffeeShop);