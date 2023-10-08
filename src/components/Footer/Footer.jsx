import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import logo from '../../assets/marine-logo.png'

const Footer = () => (
  <div className="app__footer section__padding" id="contact">

    {/*  */}
    <div className="app__footer-link">
      <div className="app__footer-link_contact">
        <h1 className="app__footer-headtext">Contact US</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-link_logo">
        <img src={logo} alt="logo" />
        <p className="p__opensans">
          "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
          Others."
        </p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-link_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 Am - 12:00 Am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 Am - 11:00 Pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 MarineGuards. All Right Reserved</p>
    </div>
  </div>
);

export default Footer;
