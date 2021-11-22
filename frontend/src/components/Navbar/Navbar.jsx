import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active-nav" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={(navData) => (navData.isActive ? "active-nav" : "")}
          >
            Manage Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
