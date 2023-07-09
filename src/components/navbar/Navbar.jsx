import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-mini-container">
          <li>
            <Link className="nolink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nolink" to="/search">
              Search
            </Link>
          </li>
          <li>
            <Link className="nolink" to="/auth">
              Login
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
