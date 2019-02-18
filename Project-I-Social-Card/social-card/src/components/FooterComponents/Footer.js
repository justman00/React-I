import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="icons">
        <div className="icon">
          <i class="far fa-comment" />
        </div>
        <div className="icon">
          <i class="fas fa-retweet" /> 6
        </div>
        <div className="icon">
          <i class="far fa-heart" /> 4
        </div>
        <div className="icon">
          <i class="far fa-envelope" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
