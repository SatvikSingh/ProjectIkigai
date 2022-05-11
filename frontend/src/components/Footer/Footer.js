import React from "react";
import Logo from "../../assets/images/company-logo.png";
import "./footer.css";
import FontAwesome from 'react-fontawesome'

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
          <div className="social-text">Follow us on : </div>
          <FontAwesome icon="fa-brands fa-instagram" />
          <FontAwesome icon="fa-brands fa-linkedin" />
          <FontAwesome icon="fa-brands fa-facebook" />
        </div>
      </div>
      <div className="footer-copyright">&copy; Designed in 2002 &nbsp; • &nbsp; Kiran</div>
    </div>
  );
};

export default Footer;
