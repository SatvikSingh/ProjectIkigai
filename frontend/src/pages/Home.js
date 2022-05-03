import React from 'react'
import HomeContent from '../components/Home/HomeContent.js';
import "./home.css"
import image from "../assets/images/header-bg-img.png"
import Footer from '../components/Footer/Footer.js';
const Home = () => {
  return (
    <>
    <div className='home-wrapper'>
      <img src={image} id="header-img" alt='headerimg'/>
      <HomeContent/>
    </div>
    </>
  )
}

export default Home