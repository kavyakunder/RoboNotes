import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-options">
        <div className="navbar-links">Home</div>
        <div className="navbar-links">Notes</div>
        <div className="navbar-links">Login</div>
      </div>
    </div>
  );
}

export default Navbar;
