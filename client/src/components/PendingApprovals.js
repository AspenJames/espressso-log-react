import React, { Component } from 'react';

class PendingApprovals extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }

  renderUsers = () => {
    return this.props.users.map(user => {
      return (
        <React.Fragment>
          <li key={user.id}>{user.name} <button
            onClick={()=> this.approveUser(user.id)}
          >Approve</button> <button
            onClick={() => this.rejectUser(user.id)}
          >Reject</button></li>
        </React.Fragment>
      )
    })
  }

  approveUser = (userId) => {
    console.log("approved user id: ", userId)
    //TODO: patch api/coffee_shop_users/{this.props.coffeeShopId}
  }

  rejectUser = (userId) => {
    console.log("rejected user id: ", userId)
    //TODO: delete api/coffee_shop_users/{this.props.coffeeShopId}
  }
}

export default PendingApprovals;