import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-mini-container">
          <li>Home</li>
          <li>Search</li>
          <li>Login</li>
          <li>Sign Up</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
