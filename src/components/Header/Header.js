import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import img from "../../img/logo (5).png";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="container-2 sticky-top">
      <div className="d-flex flex-column flex-md-row justify-content-between container align-items-center py-3">
        <div className="img-holder">
          <img className="w-100" src={img} alt="" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blogs"
          >
            Blogs
          </NavLink>
            {
              user?  <button onClick={()=>signOut(auth)} className="signUp" href="">Sign Out</button> :           
              <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/login"
            >
              Login
            </NavLink>
            }
          <NavLink to="/order">
            <FiShoppingCart></FiShoppingCart>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
