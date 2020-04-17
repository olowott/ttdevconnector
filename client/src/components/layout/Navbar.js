import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <Link to="/">
        <img src="./img/devconnector-logo.png" alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="!#">Developer</Link>
        </li>
        <li>
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
