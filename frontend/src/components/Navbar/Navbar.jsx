import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/company-logo.png";

const Navbar = () => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="nav-wrapper">
          <nav class="navbar">
            <img
              src={logo}
              alt="Company Logo"
            />
            <div class="menu-toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <ul class="nav no-search">
              <li class="nav-item">
                <a href="#">Home</a>
              </li>
              <li class="nav-item">
                <a href="#">About</a>
              </li>
              <li class="nav-item">
                <a href="#">Doctors</a>
              </li>
              <li class="nav-item">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
