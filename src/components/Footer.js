import React, { useState } from "react";
import Logo from "../assets/logo_white.png";
import "../styles/Footer.css";

const Footer = ({ images }) => {
  return (
    <div className="footer">
      <img className="footer-img" src={Logo} />
      <p className="certificate">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
