import React from "react";
import { FaBell, FaGlobe, FaUserCircle } from "react-icons/fa";
import "./navbar.css"; 
function Navbar() {
  return (
    <nav className="navbar" dir="rtl">
      <div >
      </div>
      <div className="navbar-left">
        <button className="icon-button"><FaBell /></button>
        <button className="icon-button"><FaGlobe /> عربي</button>
        <button className="icon-button"><FaUserCircle /> ريفان</button> 
      </div>
    </nav>
  );
}
export default Navbar;