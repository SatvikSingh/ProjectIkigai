import React from 'react'
import "./HomeContent.css";
import logo from "../../assets/images/Company-logo.png";
import didi from "../../assets/images/didi.png"
import Cards from "./Cards.js"
const carddetail=[
  {
    "title":"Mental Health",
    "subtitle":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    "img_url":"https://res.cloudinary.com/dosn4zwj8/image/upload/v1651234344/test/card-img1_wi27jr.png"
  },
  {
    "title":"Mental Health2",
    "subtitle":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    "img_url":"https://res.cloudinary.com/dosn4zwj8/image/upload/v1651234344/test/card-img2_cltoon.png"
  },
  {
    "title":"Mental Health3",
    "subtitle":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    "img_url":"https://res.cloudinary.com/dosn4zwj8/image/upload/v1651234344/test/card-img3_avs2yr.png"
  },
  {
    "title":"Mental Health4",
    "subtitle":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    "img_url":"https://res.cloudinary.com/dosn4zwj8/image/upload/v1651234345/test/card-img4_pedhbh.png"
  },
]
const HomeContent = () => {
  return (
    <div id="home">
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <nav className="navbar">
            <img
              id="company-logo"
              src={logo}
              alt="Company Logo"
            />
            <div className="menu-toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="nav no-search">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Doctors</a>
              </li>
              <li className="nav-item">
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
      <div id='home-cards'>
        {
          carddetail.map(function (item) {
            return <Cards item={item} key={item.img_url}/>
          })
        }
      </div>
    </div>
  )
}

export default HomeContent