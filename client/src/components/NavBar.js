import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar" >
            <NavLink to='/'         exact>Home</NavLink><span> | </span>
            <NavLink to='/login'    exact>Login</NavLink><span> | </span>
            <NavLink to='/signup'   exact>Signup</NavLink>
        </div>
    );
}

export default NavBar;