import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const NavBar = props => {
  const renderUserLinks = () => {
    if (props.user === '') {
      return (
        <React.Fragment>
        <NavLink to='/login'    exact>Login</NavLink><span> | </span>
        <NavLink to='/signup'   exact>Signup</NavLink>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavLink to='/coffee_shops'  exact>Coffee Shops</NavLink><span> | </span>
          <NavLink to='/espressos/new' exact>New Espresso</NavLink><span> | </span>
          <a href='api/logout' onClick={handleLogout}>Logout</a>
        </React.Fragment>
      );
    }
  }

  const handleLogout = event => {
    const user = props.user;
    const history = props.history;
    event.preventDefault();
    // sign out on server side
    fetch("api/logout", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(resp => resp.json())
      .then(json => console.log(json));
    // reset store
    props.resetStore()
    history.push('/login')
  }

  return (
      <div className="navbar" >
          <NavLink to='/'         exact>Home</NavLink><span> | </span>
          {renderUserLinks()}
      </div>
  );
}


export default withRouter(NavBar);
