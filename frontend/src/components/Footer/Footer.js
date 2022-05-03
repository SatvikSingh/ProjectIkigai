import React from 'react'
import Logo from '../../assets/images/Company-logo.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div id='footer'>
        <img id='footerimg' src={Logo}/>
        <div id='footerdes'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, </div>
        <div id='social'>
            Follow us on :
            {/* <FontAwesomeIcon icon={('user-secret')} /> */}
            {/* <FontAwesomeIcon icon={"fa-brands fa-linkedin"} /> */}
        </div>
    </div>
  )
}

export default Footer