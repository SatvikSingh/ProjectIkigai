import React from 'react'
import "./HomeContent.css";
import logo from "../../assets/images/Company-logo.png";
import didi from "../../assets/images/didi.png"
const HomeContent = () => {
  return (
    <div id="home">
      <div class="page-wrapper">
        <div class="nav-wrapper">
          <nav class="navbar">
            <img
              id="company-logo"
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
      <div id="home-content">
          <img src={didi}/>
          <div id="content">
            <div id="heading">
              Mental <span style={{color:"#C7EEFF"}}>Health</span>
            </div>
            <div id="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </div>
            <div id="button">
                <button type="submit">Contact Us</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomeContent