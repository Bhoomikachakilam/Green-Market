import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "./greenmarket.jpg"
function Navbar() {
  return (
    <div className="Navbar">
      <img
        className="image"
        src={img}
        alt="Green Market"
      />
      <div className="About">
        <Link to="register" className="no-underline">Register</Link>
        <Link to="login" className="no-underline">Login</Link>
      </div>
    </div>
  );
}
export default Navbar;
