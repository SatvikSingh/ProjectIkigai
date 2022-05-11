import React from "react";
import Logo from "../../assets/images/company-logo.png";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div className="footer-desc">
          <img id="footerimg" src={Logo} alt="logo" />
          <div className="footer-desc-divider"> | </div>
          <div className="footer-desc-content">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem
            ipsum dolor sit amet
          </div>
        </div>
        <div id="social">
          <div className="social-text">Follow us on : &nbsp;</div>
          
          <InstagramIcon/>
          <FacebookIcon/>
          <LinkedInIcon/>
        </div>
      </div>
      <div className="footer-copyright">&copy; Designed in 2002 &nbsp; • &nbsp; Kiran</div>
    </div>
  );
};

export default Footer;
