import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/abdulaziz_akbarovic/">
          <InstagramIcon />
        </a>
        <a href="https://t.me/Abdulaziz_akbarovic">
          <TelegramIcon />
        </a>
        <a href="">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/abdulaziz-khalilov-190373259/">
          <LinkedinIcon />
        </a>
      </div>
      <p> &copy; 2022KhalilovAbulaziz</p>
    </div>
  );
};

export default Footer;
