import './Navbar.css';
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
      <p>login/signup</p>
      <p>cart placeholder</p>
    </div>
  );
};
