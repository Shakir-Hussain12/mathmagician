import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-header">
      <NavLink
        className={(link) => (link.isActive ? 'link active' : 'link')}
        to="/"
      >
        Math-Magicians
      </NavLink>
    </div>
    <ul className="nav-list">
      <li className="list-item">
        <NavLink
          className={(link) => (link.isActive ? 'link active' : 'link')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink
          className={(link) => (link.isActive ? 'link active' : 'link')}
          to="/Calculator"
        >
          Calculator
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink
          className={(link) => (link.isActive ? 'link active' : 'link')}
          to="/Quote"
        >
          Quote
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
