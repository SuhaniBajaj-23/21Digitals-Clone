import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";



const Navbar=()=> {
  return (
    // <Router>
    <div className="page">
      <div className="navBar">
        <Link className="logo" to="/">
          <img src={logo} alt="" className="logoLeft" />
        </Link>
        <div className="nav-links">
          <NavLink
            exact
            className="link"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#EFA14C" : "#fff",
            })}
          >
            <p> Home</p>
          </NavLink>
          <NavLink
            className="link"
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#EFA14C" : "#fff",
            })}
          >
            <p>About Us</p>
          </NavLink>

          <a href="/#services" className="link">
            Services
          </a>
          <NavLink
            className="link"
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#EFA14C" : "#fff",
            })}
          >
            <p> Contact Us</p>
          </NavLink>
          <NavLink
            className="link"
            to="/blogs"
            style={({ isActive }) => ({
              color: isActive ? "#EFA14C" : "#fff",
            })}
          >
            <p> Blogs</p>
          </NavLink>
          
        </div>
        <button className="navButton" onClick={
          event=> window.location.href="/contact"
        }>Let's Talk</button>
      </div>
    </div>
  );
}

export default Navbar;
