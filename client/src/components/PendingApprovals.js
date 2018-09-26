import React, { Component } from 'react';

class PendingApprovals extends Component {
  render() {
    return (
      <div>
        <h3>Users pending approval: </h3>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }

  renderUsers = () => {
    return this.props.users.map(user => {
      return (
        <React.Fragment key={user.id}>
          <li id={user.id}>{user.name} <button
            onClick={()=> this.updateUserPermission(user.id, "approve")}
          >Approve</button> <button
            onClick={() => this.updateUserPermission(user.id, "deny")}
          >Reject</button></li>
        </React.Fragment>
      )
    })
  }

  updateUserPermission = (userId, payload) => {
    //TODO: patch api/coffee_shop_users/
    // send {"user_id": xx, "coffee_shop_id": xx, "payload": "approve"/"deny"}
    const data = {"user_id": userId, "coffee_shop_id": this.props.coffeeShopId, "payload": payload};
    fetch(`/api/coffee_shop_users`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
      .then(json => {
        console.log(json);
        // remove li 
        document.getElementById(userId).remove();
      })
  }
}

export default PendingApprovals;