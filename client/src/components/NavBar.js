import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  const renderUserLinks = () => {
    if (props.user === '') {
      return (
        <React.Fragment>
        <NavLink to='/login'    exact>Login</NavLink><span> | </span>
        <NavLink to='/signup'   exact>Signup</NavLink>
        </React.Fragment>
      )
    } else {
      return (
        <a href='api/logout' onClick={props.handleLogout}>Logout</a>
      )
    }
  }

    return (
        <div className="navbar" >
            <NavLink to='/'         exact>Home</NavLink><span> | </span>
            {renderUserLinks()}
        </div>
    );
}


export default NavBar;
