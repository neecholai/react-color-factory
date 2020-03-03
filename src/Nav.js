import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
  return (
    <nav className='Nav'>
      <h3>Welcome to the color factory. </h3>
      <NavLink exact to='/colors/new'>Add a color</NavLink>
    </nav>
  );
}

export default Nav;