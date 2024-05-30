import * as React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { LoginForm } from './LoginForm';
import logo from '../logo.svg';
// import shoplogo from '../assets/shoplogo.png';

export const Navbar = () => {
  const isLoggedIn = localStorage.getItem('userLogged');

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (isLoggedIn) {
      setIsAuthenticated(true);
    }
  }, [isLoggedIn]);

  // @ts-expect-error
  const userData = JSON.parse(localStorage.getItem('userInformation'));

  const handleLogout = () => {
    localStorage.removeItem('userLogged');
    setIsAuthenticated(false);
  };

  return (
    <div className="Navbar">
      <img
        className="Navbar-logo"
        src={require('../assets/shoplogo2.png')}
        alt="logo"
      />
      <p>SAMARKAND SHOP (Navbar)</p>

      {isAuthenticated ? (
        <>
          <Link to="/logout" onClick={handleLogout}>
            logout
          </Link>{' '}
          <p>Welcome {userData.firstName}</p>{' '}
        </>
      ) : (
        <>
          <Link to="/sign-up">sign up</Link>
          <Link to="/login">login</Link>
        </>
      )}
      <Link to="/cart">shopping cart</Link>
    </div>
  );
};
