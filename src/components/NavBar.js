import React from 'react'
import './NavBar.css';
import logo from '../images/airbnb-logo.png';

function NavBar() {
  return (
    <div className='nav'>
      <img className='nav__img' src={logo} />

    </div>
  )
}

export default NavBar