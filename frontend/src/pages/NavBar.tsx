
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-links">
  <NavLink to="/" className={({isActive}) => "navbar-link" + (isActive ? " active" : "")}>Home</NavLink>
  <NavLink to="/about" className={({isActive}) => "navbar-link" + (isActive ? " active" : "")}>About</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
