import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";

// const Navbar = () =>{
//     <div className='navBar'>
//         <Link className='logo' to='/'>
//             <img src="../../assets/logo.png" alt=""/>
//         </Link>
//         <div className='nav-links' >
//                 <NavLink exact activeStyle={{color: "#7716A5"}}  className="link" to="/"><p> Home</p></NavLink>
//                 <NavLink activeStyle={{color: "#7716A5"}}  className="link" to="/"> <p>About Us</p></NavLink>
//                 <NavLink activeStyle={{color: "#7716A5"}}  className="link" to="/"><p> Services</p></NavLink>
//                 <NavLink activeStyle={{color: "#7716A5"}}  className="link" to="/"><p> Contact Us</p></NavLink>
//                 <NavLink activeStyle={{color: "#7716A5"}}  className="link" to="/"><p> Blogs</p></NavLink>
//         </div>
//     </div>
// }

function Navbar() {
  return (
    <div className="navBar">
      <Link className="logo" to="/">
        <img src={logo} alt=""  className="logoLeft"/>
      </Link>
      <div className="nav-links">
        <NavLink
          exact
          className="link"
          to="/"
          style={({ isActive }) => ({
                color: isActive ? '#EFA14C' :'#fff',
            })}
          >
          <p> Home</p>
        </NavLink>
        <NavLink className="link" to="/about"
        style={({ isActive }) => ({
                color: isActive ? '#EFA14C' :'#fff',
            })}>
          <p>About Us</p>
        </NavLink>
        <NavLink className="link" to="/services" style={({ isActive }) => ({
                color: isActive ? '#EFA14C' :'#fff',
            })}>
          <p> Services</p>
        </NavLink>
        <NavLink className="link" to="/contact" style={({ isActive }) => ({
                color: isActive ? '#EFA14C' :'#fff',
            })}>
          <p> Contact Us</p>
        </NavLink>
        <NavLink className="link" to="/blogs" style={({ isActive }) => ({
                color: isActive ? '#EFA14C' :'#fff',
            })}>
          <p> Blogs</p>
        </NavLink>
      </div>
      <button className="navButton">Let's Talk</button>
    </div>
  );
}

export default Navbar;
