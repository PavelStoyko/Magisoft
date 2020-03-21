import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">Note App</div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          All todos
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/done">
          Done todos
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/willDone">
          Will Done
        </NavLink>
      </li>
    </ul>
  </nav>
);
