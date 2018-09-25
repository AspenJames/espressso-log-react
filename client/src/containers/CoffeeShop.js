import React, { Component } from 'react';
import { connect } from 'react-redux';

import EspressoForm from '../components/EspressoForm';

class CoffeeShop extends Component {
  state = {
    coffeeShop: {
      id: null,
      name: null,
      address: null,
      admin: null,
      approved: null
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
        const approved = (coffeeShop.users_pending_approval.map(u => u.id).includes(this.props.user.id)) ? false : true
        this.setState({
          coffeeShop: {
            id: coffeeShop.id,
            name: coffeeShop.name,
            address: coffeeShop.address,
            approved: approved,
            admin: coffeeShop.admin[0]
          },
          espressos: coffeeShop.espressos,
          pendingUsers: coffeeShop.users_pending_approval
        });
      });
  }

  isAdmin = () => {
    return this.state.coffeeShop.admin && this.props.user.id === this.state.coffeeShop.admin.id
  }

  render() {
    if (this.state.coffeeShop.approved === false) {
      return(
        <div>
          <h2>{this.state.coffeeShop.name}</h2>
          <p>Your approval for this coffee shop is pending, contact the admin, {this.state.coffeeShop.admin.name}, for approval.</p>
        </div>
      )
    } else {
      return (
        <div>
          <h2>{this.state.coffeeShop.name}</h2>
          {this.isAdmin() && <div>Admin</div>}
        </div>
      );
    };
  }
}

const mapStateToProps = state => {
  return ({
    user: state.users.user
  });
}

export default connect(mapStateToProps)(CoffeeShop);