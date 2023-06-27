import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "./greenmarket.jpg";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="Navbar">
      <img className="image" src={img} alt="Green Market" />
      <div className="About">
        <Link to="register" className="no-underline">Register</Link>
        <Link to="login" className="no-underline">Login</Link>
        <Link to="#" className="no-underline" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
