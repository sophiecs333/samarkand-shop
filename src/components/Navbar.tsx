import * as React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { LoginForm } from './LoginForm';
import logo from '../logo.svg';
// import shoplogo from '../assets/shoplogo.png';

export const Navbar = () => {
  return (
    <div className="Navbar">
      <img
        className="Navbar-logo"
        src={require('../assets/shoplogo2.png')}
        alt="logo"
      />
      <p>SAMARKAND SHOP (Navbar)</p>
      <Link to="/login">login</Link>
      <Link to="/sign-up">sign up</Link>
      <Link to="/cart">shopping cart</Link>
    </div>
  );
};
