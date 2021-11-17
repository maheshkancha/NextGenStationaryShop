import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active-nav" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active-nav" : "")}
            to="/products"
          >
            Manage Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
